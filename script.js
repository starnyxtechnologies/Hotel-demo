(() => {
  const WHATSAPP_NUMBER = '917385585398';
  const loader = document.querySelector('.page-loader');
  document.body.classList.add('no-scroll');
  const hideLoader = () => { if(loader){loader.classList.add('is-hidden');document.body.classList.remove('no-scroll');setTimeout(()=>loader.remove(),650);} };
  window.addEventListener('load',()=>setTimeout(hideLoader,850));
  setTimeout(hideLoader,2300);

  const year = document.querySelector('[data-year]');
  if(year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
  }

  const filters = document.querySelectorAll('[data-filter]');
  const menuItems = document.querySelectorAll('.menu-item[data-category]');
  filters.forEach(btn=>btn.addEventListener('click',()=>{
    filters.forEach(x=>x.classList.toggle('active',x===btn));
    const filter=btn.dataset.filter;
    menuItems.forEach(item=>{const cats=(item.dataset.category||'').split(' ');item.hidden=filter!=='all'&&!cats.includes(filter);});
  }));
  if (filters.length && location.hash) {
    const hashCategory = ({'#maharashtrian':'maharashtrian','#vegetarian':'veg','#thali':'thali'})[location.hash];
    if (hashCategory) {
      const target = document.getElementById(location.hash.slice(1));
      const filterButton = [...filters].find(btn => btn.dataset.filter === hashCategory);
      if (filterButton) filterButton.click();
      if (target) setTimeout(() => target.scrollIntoView({behavior:'smooth',block:'center'}), 500);
    }
  }

  const enquiryForm=document.getElementById('whatsapp-enquiry');
  if(enquiryForm){
    enquiryForm.addEventListener('submit',event=>{
      event.preventDefault();
      if(!enquiryForm.reportValidity()) return;
      const data=new FormData(enquiryForm);
      const message=[
        'Hello Demo Hotel! I would like to make an enquiry.',
        `Name: ${data.get('name')}`,
        `Phone: ${data.get('phone')}`,
        `Enquiry: ${data.get('type')}`,
        `Message: ${data.get('message')||'Please share more details.'}`,
        'I came from the Demo Hotel website.'
      ].join('\n');
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,'_blank','noopener');
    });
  }

  const lightbox=document.querySelector('.lightbox');
  if(lightbox){
    const lightboxImg=lightbox.querySelector('img');
    const close=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImg.src='';};
    document.querySelectorAll('[data-lightbox]').forEach(btn=>btn.addEventListener('click',()=>{lightboxImg.src=btn.dataset.lightbox;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');}));
    lightbox.querySelector('.lightbox-close').addEventListener('click',close);
    lightbox.addEventListener('click',e=>{if(e.target===lightbox)close();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  }
})();
