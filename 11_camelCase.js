function camelcase(s) {
  const str = s.split(/(?=[A-Z])/);
  return str.length;
}

console.log(camelcase("saveChangesInTheEditor"));
