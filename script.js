let previewContainer = document.querySelector('.product-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.pop-container .pop-content').forEach(product =>{
    product.onclick = () =>{
      previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview =>{  
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.uil-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});


let prevContainer = document.querySelector('.bundle-preview');
let prevBox = prevContainer.querySelectorAll('.prev');

document.querySelectorAll('.bundle-containerr .bundle-content').forEach(produk =>{
    produk.onclick = () =>{
      prevContainer.style.display = 'flex';
        let name = produk.getAttribute('data-name');
        prevBox.forEach(prev =>{
            let target = prev.getAttribute('data-target');
            if(name == target){
                prev.classList.add('active');
            }
        });
    };
});

prevBox.forEach(close =>{
    close.querySelector('.uil-times').onclick = () =>{
        close.classList.remove('active');
        prevContainer.style.display = 'none';
    };
});










