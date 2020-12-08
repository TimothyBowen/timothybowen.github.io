function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  await sleep(10000);
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
main();
