<template>
  <div ref="toc" class="vue-toc" />
</template>

<script>
export default {
  name: 'VueToc',
  props: {
    target: {
      type: String,
      default: ''
    },
    h2Class: {
      type: String,
      default: 'toc-2'
    },
    h3Class: {
      type: String,
      default: 'toc-3'
    },
  },
  mounted() {
    this.$nextTick(() => {
      const toc = this.$refs.toc;
      const matches = document.querySelectorAll(`${this.target} h2, ${this.target} h3`);
      matches.forEach(value => {
        if (value.tagName === 'H2') {
          const ul = document.createElement('ul');
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.innerHTML = value.textContent;
          a.href = `#${value.id}`;
          li.appendChild(a);
          li.classList.add(this.h2Class);
          ul.appendChild(li);
          toc.appendChild(ul);
        }
        if (value.tagName === 'H3') {
          const ul = document.createElement('ul');
          const li = document.createElement('li');
          const a = document.createElement('a');
          const lastUl = toc.lastElementChild;
          const lastLi = lastUl.lastElementChild;
          a.innerHTML = value.textContent;
          a.href = `#${value.id}`;
          li.appendChild(a);
          li.classList.add(this.h3Class);
          ul.appendChild(li);
          lastLi.appendChild(ul);
        }
      });
    });
  }
};
</script>
