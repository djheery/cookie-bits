let queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const discountCode = urlParams.get('discount_code')
const cookies = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]:decodeURIComponent(value)}), {})

if(discountCode){
  document.cookie = `discount_code=${discountCode}; expires='${new Date().toUTCString()}` 
}
  
if(window.location.pathname === '/contact-us' || window.location.href === '/contact-us/') {
  console.log('cookie Exists')
  document.getElementById('text-yui_3e_17_2_1_1612531755922_37943-field').value = cookies.discount_code
}



