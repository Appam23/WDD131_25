document.addEventListener('DOMContentLoaded', () => {
  // 1. Get a reference to the section where articles go
  const postsSection = document.querySelector('.blog-posts');

  // 2. Function to build an article's markup from data
  function buildArticle(article) {
    // Create the <article> element
    const articleEl = document.createElement('article');
    // 3. Template literal string for article HTML, using article data
    articleEl.innerHTML = `
      <div class="details">
        <time datetime="${formatISO(article.date)}"><strong>${article.date}</strong></time>
        <ul>
          <li>${article.ages}</li>
          <li>${article.genre}</li>
          <li>${article.stars}</li>
        </ul>
      </div>
      <div class="content">
        <h2>${article.title}</h2>
        <figure>
          <img src="${article.imgSrc}" alt="${article.imgAlt}">
          <figcaption>
  ${article.description}
  <span class="read-more">Read more...</span>
</figcaption>
        </figure>
      </div>
    `;
    return articleEl;
  }

  // Format a date string to ISO for <time datetime="">
  function formatISO(dateString) {
    const d = new Date(dateString);
    return d.toISOString().slice(0,10);
  }

  // 4. Loop through articles and add them to the page
  function renderArticles() {
    postsSection.innerHTML = "";
    articles.forEach(article => {
      const el = buildArticle(article);
      postsSection.appendChild(el);
    });
  }

  // 5. Call the function to render all articles
  renderArticles();
});