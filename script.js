document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const loginBtn = document.getElementById('login-btn');
    const userProfile = document.getElementById('user-profile');
    const loginModal = document.getElementById('login-modal');
    const closeModal = document.querySelectorAll('.close-modal');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const logoutBtn = document.getElementById('logout-btn');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const recoveryMessage = document.getElementById('recovery-message');
    const recoveryError = document.getElementById('recovery-error');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const categoriesMenu = document.querySelector('.categories-menu');
    
    // Verificar se já está logado (simulação com localStorage)
    if (localStorage.getItem('loggedInUser')) {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        showUserProfile(user);
    }
    
    // Abrir modal de login
    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });
    
    // Fechar modais
    closeModal.forEach(btn => {
        btn.addEventListener('click', function() {
            loginModal.style.display = 'none';
            forgotPasswordModal.style.display = 'none';
            loginError.textContent = '';
            recoveryMessage.textContent = '';
            recoveryError.textContent = '';
        });
    });
    
    // Fechar modais ao clicar fora
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
            loginError.textContent = '';
        }
        
        if (event.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
            recoveryMessage.textContent = '';
            recoveryError.textContent = '';
        }
    });
    
    // Submissão do formulário de login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simulação de login com API (usando fetch)
        loginUser(email, password);
    });
    
    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('loggedInUser');
            userProfile.style.display = 'none';
            loginBtn.style.display = 'block';
        });
    }
    
    // Recuperação de senha
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'none';
        forgotPasswordModal.style.display = 'block';
    });
    
    // Submissão do formulário de recuperação
    forgotPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('recovery-email').value;
        
        // Simular envio para API
        setTimeout(() => {
            if (email === 'test@gmail.com') {
                recoveryMessage.textContent = 'Um e-mail com instruções foi enviado para ' + email;
                recoveryError.textContent = '';
                
                // Limpar após 5 segundos
                setTimeout(() => {
                    forgotPasswordModal.style.display = 'none';
                    recoveryMessage.textContent = '';
                    forgotPasswordForm.reset();
                }, 5000);
            } else {
                recoveryError.textContent = 'E-mail não encontrado em nosso sistema';
                recoveryMessage.textContent = '';
            }
        }, 500);
    });
    
    // Menu mobile
    mobileMenuBtn.addEventListener('click', function() {
        categoriesMenu.classList.toggle('active');
    });
    
    // Função para fazer login (simulação com API)
    function loginUser(email, password) {
        // Aqui você faria uma requisição real para sua API
        // Estou simulando com um timeout para demonstrar
        
        // Dados de teste fornecidos
        if (email === 'test@gmail.com' && password === '123456') {
            // Simulando resposta da API
            setTimeout(() => {
                const userData = {
                    email: email,
                    name: 'Usuário Teste',
                    avatar: 'image.png'
                };
                
                // Salvar no localStorage para persistência
                localStorage.setItem('loggedInUser', JSON.stringify(userData));
                
                // Mostrar perfil do usuário
                showUserProfile(userData);
                
                // Fechar modal e limpar erros
                loginModal.style.display = 'none';
                loginError.textContent = '';
                loginForm.reset();
            }, 500);
        } else {
            // Simulando erro de login
            setTimeout(() => {
                loginError.textContent = 'E-mail ou senha incorretos';
            }, 500);
        }
    }
    
    // Função para mostrar o perfil do usuário após login
    function showUserProfile(user) {
        loginBtn.style.display = 'none';
        userProfile.style.display = 'flex';
        
        document.getElementById('user-avatar').src = user.avatar;
        document.getElementById('username').textContent = user.name.split(' ')[0]; // Mostrar apenas o primeiro nome
    }
});
