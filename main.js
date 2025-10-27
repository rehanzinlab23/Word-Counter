// Global Elememts

const textArea = document.getElementById('text');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const noSpaceCount = document.getElementById('noSpaceCount');
const sentenceCount = document.getElementById('sentenceCount');
const paraCount = document.getElementById('paraCount');
const readTime = document.getElementById('readTime');
const clearBtn = document.getElementById('clear');
const themeToggle = document.getElementById('themeToggle');
const bold = document.getElementById('bold');
const italic = document.getElementById('italic');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const copy = document.getElementById('copy');

// Copy To Clipboard

copy.addEventListener('click', () => {
navigator.clipboard.writeText(textArea.value)
});

// Function to count words

function countText() {
  let text = textArea.value.trim();

  // Characters

  charCount.textContent = text.length;

  // No spaces characters

  noSpaceCount.textContent = text.replace(/\s+/g, '').length;

  // Words

  const words = text.match(/\b[-?(\w+)?]+\b/g);
  wordCount.textContent = words ? words.length : 0;

  // Sentences
  
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  sentenceCount.textContent = sentences.length;

  // Paragraphs

  const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0);
  paraCount.textContent = paragraphs.length;

  // Reading time

  const minutes = Math.ceil((words ? words.length : 0) / 200);
  readTime.textContent = `${minutes} min`;
}

// Event: text input

textArea.addEventListener('input', countText);

// Clear button

clearBtn.addEventListener('click', () => {
  textArea.value = '';
  countText();
});

// 🌙 Theme toggle

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});

// Bold

bold.addEventListener('click', () => {
  if (textArea.value.trim().length > 0) {
    if (!textArea.style.fontWeight || textArea.style.fontWeight === 'normal') {
      textArea.style.fontWeight = 'bold';
    } else {
      textArea.style.fontWeight = 'normal';
    }
  }
});

// Italic

italic.addEventListener('click', () => {
  if (!textArea.style.fontStyle || textArea.style.fontStyle === 'normal') {
    textArea.style.fontStyle = 'italic';
  } else {
    textArea.style.fontStyle = 'normal';
  }
});

// UpperCase

uppercase.addEventListener('click', () => {
  textArea.value = textArea.value.toUpperCase();
  countText();
});

// Lowercase

lowercase.addEventListener('click', () => {
  textArea.value = textArea.value.toLowerCase();
  countText();
});