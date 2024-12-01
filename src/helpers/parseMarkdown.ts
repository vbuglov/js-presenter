function parseMarkdown(markdownText: string) {
  let htmlText = markdownText;

  // Escape special HTML characters
  htmlText = htmlText.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Headers
  htmlText = htmlText.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
  htmlText = htmlText.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
  htmlText = htmlText.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
  htmlText = htmlText.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  htmlText = htmlText.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  htmlText = htmlText.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold and Italic
  htmlText = htmlText.replace(/\*\*\*(.*?)\*\*\*/gim, '<b><i>$1</i></b>');
  htmlText = htmlText.replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>');
  htmlText = htmlText.replace(/\*(.*?)\*/gim, '<i>$1</i>');

  // Blockquote
  htmlText = htmlText.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');

  // Unordered List
  htmlText = htmlText.replace(/^\s*-\s+(.*)/gim, '<li>$1</li>');
  htmlText = htmlText.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');
  htmlText = htmlText.replace(/<\/ul>\s*<ul>/gim, '');

  // Ordered List
  htmlText = htmlText.replace(/^\s*\d+\.\s+(.*)/gim, '<li>$1</li>');
  htmlText = htmlText.replace(/(<li>.*<\/li>)/gim, '<ol>$1</ol>');
  htmlText = htmlText.replace(/<\/ol>\s*<ol>/gim, '');

  // Links
  htmlText = htmlText.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');

  // Paragraphs
  htmlText = htmlText.replace(/^\s*(\S.*)$/gim, '<p>$1</p>');

  return htmlText.trim();
}

export default parseMarkdown