window.onload = function () {
  const body = document.querySelector('td.comment-body.markdown-body');

  const children = body.children;
  let indexTexts = [];
  for (let i = 0; i < children.length; i++) {
    const node = children[i];
    const nodeName = node.nodeName;
    if (!['H1', 'H2', 'H3', 'H4', 'H5'].includes(nodeName)) {
      continue;
    }

    const text = node.textContent;
    indexTexts.push(text);

    node.id = text;
  }

  // 目次の大枠dom
  const indexDiv = document.createElement('div');
  const indexDivStyle = indexDiv.style;
  indexDivStyle.position = 'fixed';
  indexDivStyle.top = '300px';
  indexDivStyle.left = '10px';
  indexDivStyle.width = '250px';
  indexDivStyle.border = '1px solid rgba(3,102,214,0.2)';
  indexDivStyle.borderRadius = '7px';
  indexDivStyle.padding = '10px';

  // 目次domのリスト
  const indexUl = document.createElement('ul');
  indexUl.style.listStyle = 'none';
  const indexTitle = document.createElement('div');
  indexTitle.textContent = '目次';
  indexTitle.style.marginBottom = '5px';
  indexUl.appendChild(indexTitle);

  const pathName = location.pathname;
  for (let i = 0; i < indexTexts.length; i++) {
    const indexA = document.createElement('a');
    indexA.textContent = indexTexts[i];
    indexA.href = pathName + '#' + indexTexts[i];

    const indexLi = document.createElement('li');
    indexLi.style.padding = '7px 0';
    indexLi.style.borderTop = '1px solid rgba(3,102,214,0.2)';
    indexLi.appendChild(indexA);

    indexUl.appendChild(indexLi);
  }

  indexDiv.appendChild(indexUl);

  document.body.appendChild(indexDiv);
}