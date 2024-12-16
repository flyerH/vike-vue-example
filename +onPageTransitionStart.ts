async function onPageTransitionStart(pageContext) {
  console.log('outer Page pageContext', pageContext.testFlag);
}

export { onPageTransitionStart };

