(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-643264ca"],{"0b4d":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"vue-image-crop-upload"},[r("div",{staticClass:"vicp-wrap"},[r("div",{staticClass:"vicp-close",on:{click:e.off}},[r("i",{staticClass:"vicp-icon4"})]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:1==e.step,expression:"step == 1"}],staticClass:"vicp-step1"},[r("div",{staticClass:"vicp-drop-area",on:{dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,click:e.handleClick,drop:e.handleChange}},[r("i",{directives:[{name:"show",rawName:"v-show",value:1!=e.loading,expression:"loading != 1"}],staticClass:"vicp-icon1"},[r("i",{staticClass:"vicp-icon1-arrow"}),e._v(" "),r("i",{staticClass:"vicp-icon1-body"}),e._v(" "),r("i",{staticClass:"vicp-icon1-bottom"})]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:1!==e.loading,expression:"loading !== 1"}],staticClass:"vicp-hint"},[e._v(e._s(e.lang.hint))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:!e.isSupported,expression:"!isSupported"}],staticClass:"vicp-no-supported-hint"},[e._v(e._s(e.lang.noSupported))]),e._v(" "),1==e.step?r("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileinput",attrs:{type:"file"},on:{change:e.handleChange}}):e._e()]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[r("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+"\r\n\t\t\t")]),e._v(" "),r("div",{staticClass:"vicp-operate"},[r("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.off))])])]),e._v(" "),2==e.step?r("div",{staticClass:"vicp-step2"},[r("div",{staticClass:"vicp-crop"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-left"},[r("div",{staticClass:"vicp-img-container"},[r("img",{ref:"img",staticClass:"vicp-img",style:e.sourceImgStyle,attrs:{src:e.sourceImgUrl,draggable:"false"},on:{drag:e.preventDefault,dragstart:e.preventDefault,dragend:e.preventDefault,dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,drop:e.preventDefault,touchstart:e.imgStartMove,touchmove:e.imgMove,touchend:e.createImg,touchcancel:e.createImg,mousedown:e.imgStartMove,mousemove:e.imgMove,mouseup:e.createImg,mouseout:e.createImg}}),e._v(" "),r("div",{staticClass:"vicp-img-shade vicp-img-shade-1",style:e.sourceImgShadeStyle}),e._v(" "),r("div",{staticClass:"vicp-img-shade vicp-img-shade-2",style:e.sourceImgShadeStyle})]),e._v(" "),r("div",{staticClass:"vicp-range"},[r("input",{attrs:{type:"range",step:"1",min:"0",max:"100"},domProps:{value:e.scale.range},on:{mousemove:e.zoomChange}}),e._v(" "),r("i",{staticClass:"vicp-icon5",on:{mousedown:e.startZoomSub,mouseout:e.endZoomSub,mouseup:e.endZoomSub}}),e._v(" "),r("i",{staticClass:"vicp-icon6",on:{mousedown:e.startZoomAdd,mouseout:e.endZoomAdd,mouseup:e.endZoomAdd}})]),e._v(" "),e.noRotate?e._e():r("div",{staticClass:"vicp-rotate"},[r("i",{on:{click:e.rotateImg}},[e._v("↻")])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-right"},[r("div",{staticClass:"vicp-preview"},[e.noSquare?e._e():r("div",{staticClass:"vicp-preview-item"},[r("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),e._v(" "),r("span",[e._v(e._s(e.lang.preview))])]),e._v(" "),e.noCircle?e._e():r("div",{staticClass:"vicp-preview-item vicp-preview-item-circle"},[r("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),e._v(" "),r("span",[e._v(e._s(e.lang.preview))])])])])]),e._v(" "),r("div",{staticClass:"vicp-operate"},[r("a",{on:{click:function(t){return e.setStep(1)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),e._v(" "),r("a",{staticClass:"vicp-operate-btn",on:{click:e.prepareUpload,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.save))])])]):e._e(),e._v(" "),3==e.step?r("div",{staticClass:"vicp-step3"},[r("div",{staticClass:"vicp-upload"},[r("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-loading"},[e._v(e._s(e.lang.loading))]),e._v(" "),r("div",{staticClass:"vicp-progress-wrap"},[r("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-progress",style:e.progressStyle})]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[r("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+"\r\n\t\t\t\t")]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:2===e.loading,expression:"loading === 2"}],staticClass:"vicp-success"},[r("i",{staticClass:"vicp-icon3"}),e._v(" "+e._s(e.lang.success)+"\r\n\t\t\t\t")])]),e._v(" "),r("div",{staticClass:"vicp-operate"},[r("a",{on:{click:function(t){return e.setStep(2)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),e._v(" "),r("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.close))])])]):e._e(),e._v(" "),r("canvas",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"canvas",attrs:{width:e.width,height:e.height}})])])},a=[],o=(r("456d"),r("ac6a"),r("7618")),n=(r("7f7f"),r("c5f6"),{zh:{hint:"点击，或拖动图片至此处",loading:"正在上传……",noSupported:"浏览器不支持该功能，请使用IE10以上或其他现在浏览器！",success:"上传成功",fail:"图片上传失败",preview:"头像预览",btn:{off:"取消",close:"关闭",back:"上一步",save:"保存"},error:{onlyImg:"仅限图片格式",outOfSize:"单文件大小不能超过 ",lowestPx:"图片最低像素为（宽*高）："}},"zh-tw":{hint:"點擊，或拖動圖片至此處",loading:"正在上傳……",noSupported:"瀏覽器不支持該功能，請使用IE10以上或其他現代瀏覽器！",success:"上傳成功",fail:"圖片上傳失敗",preview:"頭像預覽",btn:{off:"取消",close:"關閉",back:"上一步",save:"保存"},error:{onlyImg:"僅限圖片格式",outOfSize:"單文件大小不能超過 ",lowestPx:"圖片最低像素為（寬*高）："}},en:{hint:"Click or drag the file here to upload",loading:"Uploading…",noSupported:"Browser is not supported, please use IE10+ or other browsers",success:"Upload success",fail:"Upload failed",preview:"Preview",btn:{off:"Cancel",close:"Close",back:"Back",save:"Save"},error:{onlyImg:"Image only",outOfSize:"Image exceeds size limit: ",lowestPx:"Image's size is too low. Expected at least: "}},ro:{hint:"Atinge sau trage fișierul aici",loading:"Se încarcă",noSupported:"Browser-ul tău nu suportă acest feature. Te rugăm încearcă cu alt browser.",success:"S-a încărcat cu succes",fail:"A apărut o problemă la încărcare",preview:"Previzualizează",btn:{off:"Anulează",close:"Închide",back:"Înapoi",save:"Salvează"},error:{onlyImg:"Doar imagini",outOfSize:"Imaginea depășește limita de: ",loewstPx:"Imaginea este prea mică; Minim: "}},ru:{hint:"Нажмите, или перетащите файл в это окно",loading:"Загружаю……",noSupported:"Ваш браузер не поддерживается, пожалуйста, используйте IE10 + или другие браузеры",success:"Загрузка выполнена успешно",fail:"Ошибка загрузки",preview:"Предпросмотр",btn:{off:"Отменить",close:"Закрыть",back:"Назад",save:"Сохранить"},error:{onlyImg:"Только изображения",outOfSize:"Изображение превышает предельный размер: ",lowestPx:"Минимальный размер изображения: "}},"pt-br":{hint:"Clique ou arraste o arquivo aqui para carregar",loading:"Carregando…",noSupported:"Browser não suportado, use o IE10+ ou outro browser",success:"Sucesso ao carregar imagem",fail:"Falha ao carregar imagem",preview:"Pré-visualizar",btn:{off:"Cancelar",close:"Fechar",back:"Voltar",save:"Salvar"},error:{onlyImg:"Apenas imagens",outOfSize:"A imagem excede o limite de tamanho: ",lowestPx:"O tamanho da imagem é muito pequeno. Tamanho mínimo: "}},fr:{hint:"Cliquez ou glissez le fichier ici.",loading:"Téléchargement…",noSupported:"Votre navigateur n'est pas supporté. Utilisez IE10 + ou un autre navigateur s'il vous plaît.",success:"Téléchargement réussit",fail:"Téléchargement echoué",preview:"Aperçu",btn:{off:"Annuler",close:"Fermer",back:"Retour",save:"Enregistrer"},error:{onlyImg:"Image uniquement",outOfSize:"L'image sélectionnée dépasse la taille maximum: ",lowestPx:"L'image sélectionnée est trop petite. Dimensions attendues: "}},nl:{hint:"Klik hier of sleep een afbeelding in dit vlak",loading:"Uploaden…",noSupported:"Je browser wordt helaas niet ondersteund. Gebruik IE10+ of een andere browser.",success:"Upload succesvol",fail:"Upload mislukt",preview:"Voorbeeld",btn:{off:"Annuleren",close:"Sluiten",back:"Terug",save:"Opslaan"},error:{onlyImg:"Alleen afbeeldingen",outOfSize:"De afbeelding is groter dan: ",lowestPx:"De afbeelding is te klein! Minimale afmetingen: "}},tr:{hint:"Tıkla veya yüklemek istediğini buraya sürükle",loading:"Yükleniyor…",noSupported:"Tarayıcı desteklenmiyor, lütfen IE10+ veya farklı tarayıcı kullanın",success:"Yükleme başarılı",fail:"Yüklemede hata oluştu",preview:"Önizle",btn:{off:"İptal",close:"Kapat",back:"Geri",save:"Kaydet"},error:{onlyImg:"Sadece resim",outOfSize:"Resim yükleme limitini aşıyor: ",lowestPx:"Resmin boyutu çok küçük. En az olması gereken: "}},"es-MX":{hint:"Selecciona o arrastra una imagen",loading:"Subiendo...",noSupported:"Tu navegador no es soportado, por favor usa IE10+ u otros navegadores más recientes",success:"Subido exitosamente",fail:"Sucedió un error",preview:"Vista previa",btn:{off:"Cancelar",close:"Cerrar",back:"Atrás",save:"Guardar"},error:{onlyImg:"Únicamente imágenes",outOfSize:"La imagen excede el tamaño maximo:",lowestPx:"La imagen es demasiado pequeña. Se espera por lo menos:"}},de:{hint:"Klick hier oder zieh eine Datei hier rein zum Hochladen",loading:"Hochladen…",noSupported:"Browser wird nicht unterstützt, bitte verwende IE10+ oder andere Browser",success:"Upload erfolgreich",fail:"Upload fehlgeschlagen",preview:"Vorschau",btn:{off:"Abbrechen",close:"Schließen",back:"Zurück",save:"Speichern"},error:{onlyImg:"Nur Bilder",outOfSize:"Das Bild ist zu groß: ",lowestPx:"Das Bild ist zu klein. Mindestens: "}},ja:{hint:"クリック・ドラッグしてファイルをアップロード",loading:"アップロード中...",noSupported:"このブラウザは対応されていません。IE10+かその他の主要ブラウザをお使いください。",success:"アップロード成功",fail:"アップロード失敗",preview:"プレビュー",btn:{off:"キャンセル",close:"閉じる",back:"戻る",save:"保存"},error:{onlyImg:"画像のみ",outOfSize:"画像サイズが上限を超えています。上限: ",lowestPx:"画像が小さすぎます。最小サイズ: "}},ua:{hint:"Натисніть, або перетягніть файл в це вікно",loading:"Завантажую……",noSupported:"Ваш браузер не підтримується, будь ласка скористайтесь IE10 + або іншими браузерами",success:"Завантаження виконано успішно",fail:"Помилка завантаження",preview:"Попередній перегляд",btn:{off:"Відмінити",close:"Закрити",back:"Назад",save:"Зберегти"},error:{onlyImg:"Тільки зображення",outOfSize:"Зображення перевищує граничний розмір: ",lowestPx:"Мінімальний розмір зображення: "}},it:{hint:"Clicca o trascina qui il file per caricarlo",loading:"Caricamento del file…",noSupported:"Browser non supportato, per favore usa IE10+ o un altro browser",success:"Caricamento completato",fail:"Caricamento fallito",preview:"Anteprima",btn:{off:"Annulla",close:"Chiudi",back:"Indietro",save:"Salva"},error:{onlyImg:"Sono accettate solo immagini",outOfSize:"L'immagine eccede i limiti di dimensione: ",lowestPx:"L'immagine è troppo piccola. Il requisito minimo è: "}},ar:{hint:"اضغط أو اسحب الملف هنا للتحميل",loading:"جاري التحميل...",noSupported:"المتصفح غير مدعوم ، يرجى استخدام IE10 + أو متصفح أخر",success:"تم التحميل بنجاح",fail:"فشل التحميل",preview:"معاينه",btn:{off:"إلغاء",close:"إغلاق",back:"رجوع",save:"حفظ"},error:{onlyImg:"صور فقط",outOfSize:"تتجاوز الصوره الحجم المحدد: ",lowestPx:"حجم الصورة صغير جدا. من المتوقع على الأقل: "}},ug:{hint:"مەزكۇر دائىرىنى چىكىپ رەسىم تاللاڭ ياكى رەسىمنى سۆرەپ ئەكىرىڭ",loading:"يوللىنىۋاتىدۇ...",noSupported:"تور كۆرگۈچ بۇ ئىقتىدارنى قوللىمايدۇ ، يۇقىرى نەشىردىكى تور كۆرگۈچنى ئىشلىتىڭ",success:"غەلبىلىك بولدى",fail:"مەغلۇب بولدى",preview:"ئۈنۈم رەسىم",btn:{off:"بولدى قىلىش",close:"تاقاش",back:"ئالدىنقى قەدەم",save:"ساقلاش"},error:{onlyImg:"پەقەت رەسىم فورماتىنىلا قوللايدۇ",outOfSize:"رەسىم چوڭ - كىچىكلىكى چەكتىن ئىشىپ كەتتى",lowestPx:"رەسىمنىڭ ئەڭ كىچىك ئۆلچىمى :"}},th:{hint:"คลิ๊กหรือลากรูปมาที่นี่",loading:"กำลังอัพโหลด…",noSupported:"เบราเซอร์ไม่รองรับ, กรุณาใช้ IE เวอร์ชั่น 10 ขึ้นไป หรือใช้เบราเซอร์ตัวอื่น",success:"อัพโหลดสำเร็จ",fail:"อัพโหลดล้มเหลว",preview:"ตัวอย่าง",btn:{off:"ยกเลิก",close:"ปิด",back:"กลับ",save:"บันทึก"},error:{onlyImg:"ไฟล์ภาพเท่านั้น",outOfSize:"ไฟล์ใหญ่เกินกำหนด: ",lowestPx:"ไฟล์เล็กเกินไป. อย่างน้อยต้องมีขนาด: "}},mm:{hint:"ဖိုင်ကို ဤနေရာတွင် နှိပ်၍ (သို့) ဆွဲထည့်၍ တင်ပါ",loading:"တင်နေသည်…",noSupported:"ဤဘရောက်ဇာကို အထောက်အပံ့ မပေးပါ၊ ကျေးဇူးပြု၍ IE10+ သို့မဟုတ် အခြား ဘရောက်ဇာ ကို အသုံးပြုပါ",success:"ဖိုင်တင်နေမှု မပြီးမြောက်ပါ",fail:"ဖိုင်တင်နေမှု မအောင်မြင်ပါ",preview:"အစမ်းကြည့်",btn:{off:"မလုပ်တော့ပါ",close:"ပိတ်မည်",back:"နောက်သို့",save:"သိမ်းမည်"},error:{onlyImg:"ဓာတ်ပုံ သီးသန့်သာ",outOfSize:"ဓာတ်ပုံဆိုဒ် ကြီးလွန်းသည် ။ အများဆုံး ဆိုဒ် : ",lowestPx:"ဓာတ်ပုံဆိုဒ် သေးလွန်းသည်။ အနည်းဆုံး ဆိုဒ် : "}},se:{hint:"Klicka eller dra en fil hit för att ladda upp den",loading:"Laddar upp…",noSupported:"Din webbläsare stöds inte, vänligen använd IE10+ eller andra webbläsare",success:"Uppladdning lyckades",fail:"Uppladdning misslyckades",preview:"Förhandsgranska",btn:{off:"Avbryt",close:"Stäng",back:"Tillbaka",save:"Spara"},error:{onlyImg:"Endast bilder",outOfSize:"Bilden är större än max-gränsen: ",lowestPx:"Bilden är för liten. Minimum är: "}}}),s={jpg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",psd:"image/photoshop"},l=function(e,t){e=e.split(",")[1],e=window.atob(e);for(var r=new Uint8Array(e.length),i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return new Blob([r],{type:t})},c=function(e,t){var r=Object.assign({ele:e.target,type:"hit",bgc:"rgba(0, 0, 0, 0.15)"},t),i=r.ele;if(i){var a=i.getBoundingClientRect(),o=i.querySelector(".e-ripple");switch(o?o.className="e-ripple":(o=document.createElement("span"),o.className="e-ripple",o.style.height=o.style.width=Math.max(a.width,a.height)+"px",i.appendChild(o)),r.type){case"center":o.style.top=a.height/2-o.offsetHeight/2+"px",o.style.left=a.width/2-o.offsetWidth/2+"px";break;default:o.style.top=e.pageY-a.top-o.offsetHeight/2-document.body.scrollTop+"px",o.style.left=e.pageX-a.left-o.offsetWidth/2-document.body.scrollLeft+"px"}return o.style.backgroundColor=r.bgc,o.className="e-ripple z-active",!1}},u={props:{field:{type:String,default:"avatar"},ki:{default:0},value:{default:!0},url:{type:String,default:""},params:{type:Object,default:null},headers:{type:Object,default:null},width:{type:Number,default:200},height:{type:Number,default:200},noRotate:{type:Boolean,default:!0},noCircle:{type:Boolean,default:!1},noSquare:{type:Boolean,default:!1},maxSize:{type:Number,default:10240},langType:{type:String,default:"zh"},langExt:{type:Object,default:null},imgFormat:{type:String,default:"png"},imgBgc:{type:String,default:"#fff"},withCredentials:{type:Boolean,default:!1},method:{type:String,default:"POST"}},data:function(){var e=this,t=e.imgFormat,r=e.langType,i=e.langExt,a=e.width,o=e.height,l=!0,c=["jpg","png"],u=-1===c.indexOf(t)?"jpg":t,p=n[r]?n[r]:n["en"],d=s[u];return e.imgFormat=u,i&&Object.assign(p,i),"function"!=typeof FormData&&(l=!1),{mime:d,lang:p,isSupported:l,isSupportTouch:document.hasOwnProperty("ontouchstart"),step:1,loading:0,progress:0,hasError:!1,errorMsg:"",ratio:a/o,sourceImg:null,sourceImgUrl:"",createImgUrl:"",sourceImgMouseDown:{on:!1,mX:0,mY:0,x:0,y:0},previewContainer:{width:100,height:100},sourceImgContainer:{width:240,height:184},scale:{zoomAddOn:!1,zoomSubOn:!1,range:1,x:0,y:0,width:0,height:0,maxWidth:0,maxHeight:0,minWidth:0,minHeight:0,naturalWidth:0,naturalHeight:0}}},computed:{progressStyle:function(){var e=this.progress;return{width:e+"%"}},sourceImgStyle:function(){var e=this.scale,t=this.sourceImgMasking,r=e.y+t.y+"px",i=e.x+t.x+"px";return{top:r,left:i,width:e.width+"px",height:e.height+"px"}},sourceImgMasking:function(){var e=this.width,t=this.height,r=this.ratio,i=this.sourceImgContainer,a=i,o=a.width/a.height,n=0,s=0,l=a.width,c=a.height,u=1;return r<o&&(u=a.height/t,l=a.height*r,n=(a.width-l)/2),r>o&&(u=a.width/e,c=a.width/r,s=(a.height-c)/2),{scale:u,x:n,y:s,width:l,height:c}},sourceImgShadeStyle:function(){var e=this.sourceImgMasking,t=this.sourceImgContainer,r=t,i=e,a=i.width==r.width?i.width:(r.width-i.width)/2,o=i.height==r.height?i.height:(r.height-i.height)/2;return{width:a+"px",height:o+"px"}},previewStyle:function(){this.width,this.height;var e=this.ratio,t=this.previewContainer,r=t,i=r.width,a=r.height,o=i/a;return e<o&&(i=r.height*e),e>o&&(a=r.width/e),{width:i+"px",height:a+"px"}}},watch:{value:function(e){e&&1!=this.loading&&this.reset()}},methods:{ripple:function(e){c(e)},off:function(){var e=this;setTimeout((function(){e.$emit("input",!1),3==e.step&&2==e.loading&&e.setStep(1)}),200)},setStep:function(e){var t=this;setTimeout((function(){t.step=e}),200)},preventDefault:function(e){return e.preventDefault(),!1},handleClick:function(e){1!==this.loading&&e.target!==this.$refs.fileinput&&(e.preventDefault(),document.activeElement!==this.$refs&&this.$refs.fileinput.click())},handleChange:function(e){if(e.preventDefault(),1!==this.loading){var t=e.target.files||e.dataTransfer.files;this.reset(),this.checkFile(t[0])&&this.setSourceImg(t[0])}},checkFile:function(e){var t=this,r=t.lang,i=t.maxSize;return-1===e.type.indexOf("image")?(t.hasError=!0,t.errorMsg=r.error.onlyImg,!1):!(e.size/1024>i)||(t.hasError=!0,t.errorMsg=r.error.outOfSize+i+"kb",!1)},reset:function(){var e=this;e.loading=0,e.hasError=!1,e.errorMsg="",e.progress=0},setSourceImg:function(e){this.$emit("src-file-set",e.name,e.type,e.size);var t=this,r=new FileReader;r.onload=function(e){t.sourceImgUrl=r.result,t.startCrop()},r.readAsDataURL(e)},startCrop:function(){var e=this,t=e.width,r=e.height,i=e.ratio,a=e.scale,o=e.sourceImgUrl,n=e.sourceImgMasking,s=e.lang,l=n,c=new Image;c.src=o,c.onload=function(){var o=c.naturalWidth,n=c.naturalHeight,u=o/n,p=l.width,d=l.height,f=0,h=0;if(o<t||n<r)return e.hasError=!0,e.errorMsg=s.error.lowestPx+t+"*"+r,!1;i>u&&(d=p/u,h=(l.height-d)/2),i<u&&(p=d*u,f=(l.width-p)/2),a.range=0,a.x=f,a.y=h,a.width=p,a.height=d,a.minWidth=p,a.minHeight=d,a.maxWidth=o*l.scale,a.maxHeight=n*l.scale,a.naturalWidth=o,a.naturalHeight=n,e.sourceImg=c,e.createImg(),e.setStep(2)}},imgStartMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,r=this.sourceImgMouseDown,i=this.scale,a=r;a.mX=t.screenX,a.mY=t.screenY,a.x=i.x,a.y=i.y,a.on=!0},imgMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,r=this.sourceImgMouseDown,i=r.on,a=r.mX,o=r.mY,n=r.x,s=r.y,l=this.scale,c=this.sourceImgMasking,u=c,p=t.screenX,d=t.screenY,f=p-a,h=d-o,g=n+f,m=s+h;i&&(g>0&&(g=0),m>0&&(m=0),g<u.width-l.width&&(g=u.width-l.width),m<u.height-l.height&&(m=u.height-l.height),l.x=g,l.y=m)},rotateImg:function(e){var t=this.sourceImg,r=this.scale,i=r.naturalWidth,a=r.naturalHeight,o=a,n=i,l=this.$refs.canvas,c=l.getContext("2d");l.width=o,l.height=n,c.clearRect(0,0,o,n),c.fillStyle="rgba(0,0,0,0)",c.fillRect(0,0,o,n),c.translate(o,0),c.rotate(90*Math.PI/180),c.drawImage(t,0,0,i,a);var u=l.toDataURL(s["png"]);this.sourceImgUrl=u,this.startCrop()},startZoomAdd:function(e){var t=this,r=t.scale;function i(){if(r.zoomAddOn){var e=r.range>=100?100:++r.range;t.zoomImg(e),setTimeout((function(){i()}),60)}}r.zoomAddOn=!0,i()},endZoomAdd:function(e){this.scale.zoomAddOn=!1},startZoomSub:function(e){var t=this,r=t.scale;function i(){if(r.zoomSubOn){var e=r.range<=0?0:--r.range;t.zoomImg(e),setTimeout((function(){i()}),60)}}r.zoomSubOn=!0,i()},endZoomSub:function(e){var t=this.scale;t.zoomSubOn=!1},zoomChange:function(e){this.zoomImg(e.target.value)},zoomImg:function(e){var t=this,r=this.sourceImgMasking,i=(this.sourceImgMouseDown,this.scale),a=i.maxWidth,o=i.maxHeight,n=i.minWidth,s=i.minHeight,l=i.width,c=i.height,u=i.x,p=i.y,d=(i.range,r),f=d.width,h=d.height,g=n+(a-n)*e/100,m=s+(o-s)*e/100,v=f/2-g/l*(f/2-u),y=h/2-m/c*(h/2-p);v>0&&(v=0),y>0&&(y=0),v<f-g&&(v=f-g),y<h-m&&(y=h-m),i.x=v,i.y=y,i.width=g,i.height=m,i.range=e,setTimeout((function(){i.range==e&&t.createImg()}),300)},createImg:function(e){var t=this,r=t.imgFormat,i=t.imgBgc,a=t.mime,o=t.sourceImg,n=t.scale,s=n.x,l=n.y,c=n.width,u=n.height,p=t.sourceImgMasking.scale,d=t.$refs.canvas,f=d.getContext("2d");e&&(t.sourceImgMouseDown.on=!1),d.width=t.width,d.height=t.height,f.clearRect(0,0,t.width,t.height),f.fillStyle="png"==r?"rgba(0,0,0,0)":i,f.fillRect(0,0,t.width,t.height),f.drawImage(o,s/p,l/p,c/p,u/p),t.createImgUrl=d.toDataURL(a)},prepareUpload:function(){var e=this.url,t=this.createImgUrl,r=this.field,i=this.ki;this.$emit("crop-success",t,r,i),"string"==typeof e&&e?this.upload():this.off()},upload:function(){var e=this,t=this.lang,r=this.imgFormat,i=this.mime,a=this.url,n=this.params,s=this.headers,c=this.field,u=this.ki,p=this.createImgUrl,d=this.withCredentials,f=this.method,h=new FormData;h.append(c,l(p,i),c+"."+r),"object"==Object(o["a"])(n)&&n&&Object.keys(n).forEach((function(e){h.append(e,n[e])}));var g=function(t){t.lengthComputable&&(e.progress=100*Math.round(t.loaded)/t.total)};e.reset(),e.loading=1,e.setStep(3),new Promise((function(e,t){var r=new XMLHttpRequest;r.open(f,a,!0),r.withCredentials=d,r.onreadystatechange=function(){4===this.readyState&&(200===this.status||201===this.status?e(JSON.parse(this.responseText)):t(this.status))},r.upload.addEventListener("progress",g,!1),"object"==Object(o["a"])(s)&&s&&Object.keys(s).forEach((function(e){r.setRequestHeader(e,s[e])})),r.send(h)})).then((function(t){e.value&&(e.loading=2,e.$emit("crop-upload-success",t,c,u))}),(function(r){e.value&&(e.loading=3,e.hasError=!0,e.errorMsg=t.fail,e.$emit("crop-upload-fail",r,c,u))}))}},created:function(){var e=this;document.addEventListener("keyup",(function(t){!e.value||"Escape"!=t.key&&27!=t.keyCode||e.off()}))}},p=u,d=(r("2133"),r("2877")),f=Object(d["a"])(p,i,a,!1,null,null,null);t["a"]=f.exports},2133:function(e,t,r){"use strict";r("9885")},"2f21":function(e,t,r){"use strict";var i=r("79e5");e.exports=function(e,t){return!!e&&i((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},4127:function(e,t,r){"use strict";var i=r("d233"),a=r("b313"),o=Object.prototype.hasOwnProperty,n={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Array.isArray,l=Array.prototype.push,c=function(e,t){l.apply(e,s(t)?t:[t])},u=Date.prototype.toISOString,p=a["default"],d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,format:p,formatter:a.formatters[p],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},f=function(e){return"string"===typeof e||"number"===typeof e||"boolean"===typeof e||"symbol"===typeof e||"bigint"===typeof e},h=function e(t,r,a,o,n,l,u,p,h,g,m,v,y){var w=t;if("function"===typeof u?w=u(r,w):w instanceof Date?w=g(w):"comma"===a&&s(w)&&(w=i.maybeMap(w,(function(e){return e instanceof Date?g(e):e})).join(",")),null===w){if(o)return l&&!v?l(r,d.encoder,y,"key"):r;w=""}if(f(w)||i.isBuffer(w)){if(l){var b=v?r:l(r,d.encoder,y,"key");return[m(b)+"="+m(l(w,d.encoder,y,"value"))]}return[m(r)+"="+m(String(w))]}var S,x=[];if("undefined"===typeof w)return x;if(s(u))S=u;else{var k=Object.keys(w);S=p?k.sort(p):k}for(var I=0;I<S.length;++I){var C=S[I],O=w[C];if(!n||null!==O){var z=s(w)?"function"===typeof a?a(r,C):r:r+(h?"."+C:"["+C+"]");c(x,e(O,z,a,o,n,l,u,p,h,g,m,v,y))}}return x},g=function(e){if(!e)return d;if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||d.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=a["default"];if("undefined"!==typeof e.format){if(!o.call(a.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var i=a.formatters[r],n=d.filter;return("function"===typeof e.filter||s(e.filter))&&(n=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?d.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?d.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:d.encode,encoder:"function"===typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:n,formatter:i,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}};e.exports=function(e,t){var r,i,a=e,o=g(t);"function"===typeof o.filter?(i=o.filter,a=i("",a)):s(o.filter)&&(i=o.filter,r=i);var l,u=[];if("object"!==typeof a||null===a)return"";l=t&&t.arrayFormat in n?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var p=n[l];r||(r=Object.keys(a)),o.sort&&r.sort(o.sort);for(var d=0;d<r.length;++d){var f=r[d];o.skipNulls&&null===a[f]||c(u,h(a[f],f,p,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.formatter,o.encodeValuesOnly,o.charset))}var m=u.join(o.delimiter),v=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),m.length>0?v+m:""}},4328:function(e,t,r){"use strict";var i=r("4127"),a=r("9e6a"),o=r("b313");e.exports={formats:o,parse:a,stringify:i}},"55dd":function(e,t,r){"use strict";var i=r("5ca1"),a=r("d8e8"),o=r("4bf8"),n=r("79e5"),s=[].sort,l=[1,2,3];i(i.P+i.F*(n((function(){l.sort(void 0)}))||!n((function(){l.sort(null)}))||!r("2f21")(s)),"Array",{sort:function(e){return void 0===e?s.call(o(this)):s.call(o(this),a(e))}})},9885:function(e,t,r){},"9e6a":function(e,t,r){"use strict";var i=r("d233"),a=Object.prototype.hasOwnProperty,o=Array.isArray,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:i.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},l=function(e,t){return e&&"string"===typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},c="utf8=%26%2310003%3B",u="utf8=%E2%9C%93",p=function(e,t){var r,p={},d=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,h=d.split(t.delimiter,f),g=-1,m=t.charset;if(t.charsetSentinel)for(r=0;r<h.length;++r)0===h[r].indexOf("utf8=")&&(h[r]===u?m="utf-8":h[r]===c&&(m="iso-8859-1"),g=r,r=h.length);for(r=0;r<h.length;++r)if(r!==g){var v,y,w=h[r],b=w.indexOf("]="),S=-1===b?w.indexOf("="):b+1;-1===S?(v=t.decoder(w,n.decoder,m,"key"),y=t.strictNullHandling?null:""):(v=t.decoder(w.slice(0,S),n.decoder,m,"key"),y=i.maybeMap(l(w.slice(S+1),t),(function(e){return t.decoder(e,n.decoder,m,"value")}))),y&&t.interpretNumericEntities&&"iso-8859-1"===m&&(y=s(y)),w.indexOf("[]=")>-1&&(y=o(y)?[y]:y),a.call(p,v)?p[v]=i.combine(p[v],y):p[v]=y}return p},d=function(e,t,r,i){for(var a=i?t:l(t,r),o=e.length-1;o>=0;--o){var n,s=e[o];if("[]"===s&&r.parseArrays)n=[].concat(a);else{n=r.plainObjects?Object.create(null):{};var c="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,u=parseInt(c,10);r.parseArrays||""!==c?!isNaN(u)&&s!==c&&String(u)===c&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(n=[],n[u]=a):n[c]=a:n={0:a}}a=n}return a},f=function(e,t,r,i){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,l=r.depth>0&&n.exec(o),c=l?o.slice(0,l.index):o,u=[];if(c){if(!r.plainObjects&&a.call(Object.prototype,c)&&!r.allowPrototypes)return;u.push(c)}var p=0;while(r.depth>0&&null!==(l=s.exec(o))&&p<r.depth){if(p+=1,!r.plainObjects&&a.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+o.slice(l.index)+"]"),d(u,t,r,i)}},h=function(e){if(!e)return n;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"===typeof e.charset?n.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?n.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:n.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:n.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:n.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:n.comma,decoder:"function"===typeof e.decoder?e.decoder:n.decoder,delimiter:"string"===typeof e.delimiter||i.isRegExp(e.delimiter)?e.delimiter:n.delimiter,depth:"number"===typeof e.depth||!1===e.depth?+e.depth:n.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:n.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:n.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:n.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:n.strictNullHandling}};e.exports=function(e,t){var r=h(t);if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var a="string"===typeof e?p(e,r):e,o=r.plainObjects?Object.create(null):{},n=Object.keys(a),s=0;s<n.length;++s){var l=n[s],c=f(l,a[l],r,"string"===typeof e);o=i.merge(o,c,r)}return i.compact(o)}},b313:function(e,t,r){"use strict";var i=String.prototype.replace,a=/%20/g,o=r("d233"),n={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=o.assign({default:n.RFC3986,formatters:{RFC1738:function(e){return i.call(e,a,"+")},RFC3986:function(e){return String(e)}}},n)},d233:function(e,t,r){"use strict";var i=Object.prototype.hasOwnProperty,a=Array.isArray,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),n=function(e){while(e.length>1){var t=e.pop(),r=t.obj[t.prop];if(a(r)){for(var i=[],o=0;o<r.length;++o)"undefined"!==typeof r[o]&&i.push(r[o]);t.obj[t.prop]=i}}},s=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},i=0;i<e.length;++i)"undefined"!==typeof e[i]&&(r[i]=e[i]);return r},l=function e(t,r,o){if(!r)return t;if("object"!==typeof r){if(a(t))t.push(r);else{if(!t||"object"!==typeof t)return[t,r];(o&&(o.plainObjects||o.allowPrototypes)||!i.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(r);var n=t;return a(t)&&!a(r)&&(n=s(t,o)),a(t)&&a(r)?(r.forEach((function(r,a){if(i.call(t,a)){var n=t[a];n&&"object"===typeof n&&r&&"object"===typeof r?t[a]=e(n,r,o):t.push(r)}else t[a]=r})),t):Object.keys(r).reduce((function(t,a){var n=r[a];return i.call(t,a)?t[a]=e(t[a],n,o):t[a]=n,t}),n)},c=function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},u=function(e,t,r){var i=e.replace(/\+/g," ");if("iso-8859-1"===r)return i.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(i)}catch(a){return i}},p=function(e,t,r){if(0===e.length)return e;var i=e;if("symbol"===typeof e?i=Symbol.prototype.toString.call(e):"string"!==typeof e&&(i=String(e)),"iso-8859-1"===r)return escape(i).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var a="",n=0;n<i.length;++n){var s=i.charCodeAt(n);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?a+=i.charAt(n):s<128?a+=o[s]:s<2048?a+=o[192|s>>6]+o[128|63&s]:s<55296||s>=57344?a+=o[224|s>>12]+o[128|s>>6&63]+o[128|63&s]:(n+=1,s=65536+((1023&s)<<10|1023&i.charCodeAt(n)),a+=o[240|s>>18]+o[128|s>>12&63]+o[128|s>>6&63]+o[128|63&s])}return a},d=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var a=t[i],o=a.obj[a.prop],s=Object.keys(o),l=0;l<s.length;++l){var c=s[l],u=o[c];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:o,prop:c}),r.push(u))}return n(t),e},f=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},h=function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},g=function(e,t){return[].concat(e,t)},m=function(e,t){if(a(e)){for(var r=[],i=0;i<e.length;i+=1)r.push(t(e[i]));return r}return t(e)};e.exports={arrayToObject:s,assign:c,combine:g,compact:d,decode:u,encode:p,isBuffer:h,isRegExp:f,maybeMap:m,merge:l}}}]);