let form = document.querySelector('.form');
const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  alert(`Здравствуйте ${name}, ваши данные успешно отправлены`);
};
form.addEventListener('submit', handleSubmit);
