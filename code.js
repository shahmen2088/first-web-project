const encrypt = (text) => {
    let result = '';
    let prev = text[0];
    for (let i = 1; i < text.length; i += 2) {
      if (text.length % 2 === 0) {
        result += text[i] + prev;
        prev = text[i + 1];
      } else {
        result += text[i] + prev;
        prev = text[i + 1];
        
      }
      }
      return result;
    };
  
  // END
  
  export default encrypt;
  