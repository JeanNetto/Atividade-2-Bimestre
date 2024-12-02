function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
function openModal(image) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modal.style.display = 'block';
    modalImage.src = image.src; 
  }
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
  
  