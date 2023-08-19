// Document query selector
// _ for single element
const _ = (el) => {
  return document.querySelector(el);
};

// _m for multple element
const _m = (el) => {
  return document.querySelectorAll(el);
};

const menuTexts = document.querySelectorAll('.sidebar .menu span');
const menuDropdownIndicators = document.querySelectorAll(
  '.sidebar .menu .fa-caret-down'
);
const menuSectionsTitle = document.querySelectorAll('.sidebar .menu p');

// Sidebar Toggle (Desktop)
_('.sidebar-toggle-desktop').addEventListener('click', function () {
  _('.sidebar').classList.toggle('minimized');
  _('.sidebar .profile .photo').classList.toggle('minimized');
  _('.sidebar .profile .name').classList.toggle('minimized');

  _('.sidebar .menu').classList.toggle('minimized');
  for (const el of _m('.sidebar .menu li .label')) {
    el.classList.toggle('minimized');
  }
  for (const el of _m('.sidebar .section-name .label')) {
    el.classList.toggle('minimized');
  }
  for (const el of _m('.sidebar .section-name .icon')) {
    el.classList.toggle('minimized');
  }
  for (const el of _m('.sidebar .menu .menu-dropdown .fa-caret-down')) {
    el.classList.toggle('minimized');
  }

  _('.sidebar .logo-desktop').classList.toggle('minimized');
  _('.sidebar .logo-desktop img').classList.toggle('minimized');
  _('.sidebar .logo-desktop .title').classList.toggle('minimized');
});

// Sidebar Toggle (Mobile)
_('.sidebar-toggle-mobile').addEventListener('click', function () {
  _('.sidebar-wrapper').classList.add('open');
  _('.bg-overlay').classList.add('overlay');
  _('body').classList.add('overflow');
});

// Tutup sidebar ketika tekan bg-overlay
_('.bg-overlay').addEventListener('click', function () {
  _('.sidebar-wrapper').classList.remove('open');
  _('.bg-overlay').classList.remove('overlay');
  _('body').classList.remove('overflow');
});

// Submenu dropdown
const colls = document.getElementsByClassName('menu-dropdown');
for (const coll of colls) {
  coll.addEventListener('click', function () {
    if (!this.classList.contains('active')) {
      collapseAllOpenContent();
    }
    this.classList.toggle('active');
    toggleContent(this.nextElementSibling);
    toggleCaret(this.children[2]);
  });
}

// toggle collapse of specified content
function toggleContent(content) {
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
  }
}

function toggleCaret(content) {
  if (content.style.transform) {
    content.style.transform = null;
  } else {
    content.style.transform = 'rotate(0deg)';
  }
}

// collapse all open content
function collapseAllOpenContent() {
  const colls = document.getElementsByClassName('menu-dropdown');
  for (const coll of colls) {
    if (coll.classList.contains('active')) {
      coll.classList.remove('active');
      toggleContent(coll.nextElementSibling);
      toggleCaret(coll.children[2]);
    }
  }
}

// Back to top
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    _('.btt').classList.add('show');
  } else {
    _('.btt').classList.remove('show');
  }
};

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Counter number
const counters = document.querySelectorAll('.amount');
const incrementConstant = 1;
const speed = 80;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute('value');
    counter.storedValue = counter.storedValue || counter.innerText - 0;
    const count = +counter.storedValue;
    const inc = incrementConstant / (speed / target);
    if (count < target) {
      counter.storedValue = count + inc;
      counter.innerText = Math.round(counter.storedValue);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
