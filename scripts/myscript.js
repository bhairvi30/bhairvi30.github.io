function showModal(card) {
    const modal = document.querySelector('.card-modal');
    const modalImage = document.getElementById('modal-image');
    const modalName = document.getElementById('modal-name');
    const modalPercentage = document.getElementById('modal-percentage');
    const modalDesc = document.getElementById('modal-desc');

    const name = card.getAttribute('name');
    const percentage= card.getAttribute('percentage');
    const desc = card.getAttribute('desc');

    modalImage.src = card.querySelector('img').src;
    modalName.innerText = name;
    modalPercentage.innerText = percentage;
    modalDesc.innerText = desc;

    modal.style.opacity = 1;
    modal.style.visibility = 'visible';
  }

  function hideModal(modal) {
    modal.style.opacity = 0;
    modal.style.visibility = 'hidden';
  }

  function toggleMenu() {
      var menu = document.getElementById("menu");
      menu.classList.toggle("open");
  }

  function toggleback() {
      var menu = document.getElementById("menu");
      menu.classList.toggle("");
  }