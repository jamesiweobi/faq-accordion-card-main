const questionNodeList = document.querySelectorAll('.faq-item');
const paragraphNodeList = document.querySelectorAll('.paragraph-body');
const questions = [...questionNodeList];
const paragraphes = [...paragraphNodeList];

questions.forEach((item) =>
  item.addEventListener('click', (e) => {
    const pBody = e.currentTarget.querySelector('.paragraph-body');
    const faqItem = e.currentTarget;
    const arrowBtn = e.currentTarget.querySelector('.arrow');
    const title = e.currentTarget.querySelector('.paragraph-header');
    faqItem.classList.toggle('faq-auto');
    pBody.classList.toggle('show');
    arrowBtn.classList.toggle('up');
    title.classList.toggle('weight');
    questions
      .filter((element) => element !== faqItem)
      .forEach((nodeElement) => {
        const pBody = nodeElement.querySelector('.paragraph-body');
        const arrowBtn = nodeElement.querySelector('.arrow');
        const title = nodeElement.querySelector('.paragraph-header');
        nodeElement.classList.remove('faq-auto');
        pBody.classList.remove('show');
        arrowBtn.classList.remove('up');
        title.classList.remove('weight');
      });
  })
);
