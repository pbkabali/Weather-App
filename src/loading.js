const loading = () => {
  const element = document.createElement('div');
  element.id = 'loading-component';
  element.innerText = 'Loading ...';
  element.classList.add('loading', 'flex', 'display-none');
  return element;
};

export default loading;
