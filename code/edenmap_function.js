window.appendPC = function appendPC(){
    /*声明插入div的img元素*/
function createPCimgs(fileName) {
    var basePath = "img/misc/lil_pc/";
    var imgElement = document.createElement("img");
    var className = "pc_img_" + fileName;

    imgElement.setAttribute("src", basePath + pc_direction + "/" + fileName + ".gif");
    imgElement.setAttribute("class", className);
    return imgElement;
};

var pc_img_body = createPCimgs("body");
var pc_img_hair = createPCimgs("hair");
var pc_img_left_eye = createPCimgs("left_eye");
var pc_img_right_eye = createPCimgs("right_eye");
var pc_img_shorts = createPCimgs("shorts");
var pc_img_dress = createPCimgs("dress");
var pc_img_shirt = createPCimgs("shirt");
var pc_img_shoes = createPCimgs("shoes");

/*染色 */


var pc_all_imgs = [pc_img_body,pc_img_hair,pc_img_left_eye,pc_img_right_eye];

function createColorCover(element, className, colorProperty, colorValue) {
    var clone = element.cloneNode();
    clone.setAttribute("class", className);

    clone.style.setProperty(colorProperty, colorValue);
    clone.style.setProperty("--pc_width", pc_width);
    return clone;
}


pc_all_imgs.push(createColorCover(pc_img_hair, "pc_img_hair_color_cover", "--pc_img_hair_color", lil_pc_hair_color));
pc_all_imgs.push(createColorCover(pc_img_left_eye, "pc_img_lefteye_color_cover", "--pc_img_lefteye_color", lil_pc_lefteye_color));
pc_all_imgs.push(createColorCover(pc_img_right_eye, "pc_img_righteye_color_cover", "--pc_img_righteye_color", lil_pc_righteye_color));

if (setup.clothes.lower[clothesIndex("lower", V.worn.lower)].skirt == 1 && !V.worn.upper.type.includes("naked")) {
    pc_all_imgs.push(pc_img_dress, createColorCover(pc_img_dress, "pc_img_shirt_color_cover", "--pc_img_shirt_color", lil_pc_upper_color));
} 
else if (!V.worn.lower.type.includes("naked")) {
    pc_all_imgs.push(pc_img_shorts, createColorCover(pc_img_shorts, "pc_img_shorts_color_cover", "--pc_img_shorts_color", lil_pc_lower_color));
}


if (!V.worn.upper.type.includes("naked") && setup.clothes.lower[clothesIndex("lower", V.worn.lower)].skirt != 1) {
    pc_all_imgs.push(pc_img_shirt, createColorCover(pc_img_shirt, "pc_img_shirt_color_cover", "--pc_img_shirt_color", lil_pc_upper_color));
}

if (!V.worn.feet.type.includes("naked")) {
    pc_all_imgs.push(pc_img_shoes, createColorCover(pc_img_shoes, "pc_img_shoes_color_cover", "--pc_img_shoes_color", lil_pc_feet_color));
}

eden_div[0].appendChild(lil_pc_div_img);
return pc_all_imgs;
}

//设置pc和伊甸的坐标
window.setPCandEdenPosition = function setPCandEdenPosition(pc_dir,pc_x,pc_y,eden_dir,eden_x,eden_y){
    if (pc_dir){
        pc_direction = pc_dir;
    }
    if(pc_x && pc_y){
        lil_pc_x = pc_x;
        lil_pc_y = pc_y;
    }
    else if (!pc_x && !pc_y && !pc_dir){
        randomPCdirection();
    }
    if(eden_dir){
        eden_direction = eden_dir;
    }
    if(eden_x && eden_y){
        lil_eden_x = eden_x;
        lil_eden_y = eden_y;
    }
}

//创造一个人物特效（如气泡，zzz文字）
window.apply_effect = function apply_effect(className,src,x,y,parentNode){
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src",src);
    div.setAttribute("class",className);
    div.appendChild(img);
    div.style.transform = "translateX(" + x +"px)translateY("+ y +"px)";

    parentNode.appendChild(div);
};

window.getRandom = function getRandom(min, max) {
    /*呜呜呜为啥不能直接用原版就有的random函数啊 */
    const floatRandom = Math.random();
    const difference = max - min;
    const random = Math.round(difference * floatRandom);
    const randomWithinRange = random + min;
    return randomWithinRange;
};

//初始化夜晚蒙版的img元素
window.applyNightMask = function applyNightMask(element, base64Img, div) {
    var base64url = "url(\"" + base64Img + "\")";
    element.style.setProperty("--mask", base64url);

    if (Time.hour >= 19 || Time.hour < 8) {
        div.appendChild(element);

        var totalMinutes = Time.hour * 60 + Time.minute;
        if (totalMinutes >= 1140 && totalMinutes < 1230) {
            element.style.setProperty("--eden_night_opacity", eden_night_opacity_night);
        } else if (totalMinutes >= 360 && totalMinutes < 480) {
            element.style.setProperty("--eden_night_opacity", eden_night_opacity_morning);
        } else {
            element.style.setProperty("--eden_night_opacity", 1);
        }
    }
};

/*HSV转RGB函数，染色衣服时需要使用*/
window.HSVtoRGB = function HSVtoRGB(h, s, v) {
    let i, f, p1, p2, p3;
    let r = 0, g = 0, b = 0;
    if (s < 0) s = 0;
    if (s > 1) s = 1;
    if (v < 0) v = 0;
    if (v > 1) v = 1;
    h %= 360;
    if (h < 0) h += 360;
    h /= 60;
    i = Math.floor(h);
    f = h - i;
    p1 = v * (1 - s);
    p2 = v * (1 - s * f);
    p3 = v * (1 - s * (1 - f));
    switch(i) {
        case 0: r = v;  g = p3; b = p1; break;
        case 1: r = p2; g = v;  b = p1; break;
        case 2: r = p1; g = v;  b = p3; break;
        case 3: r = p1; g = p2; b = v;  break;
        case 4: r = p3; g = p1; b = v;  break;
        case 5: r = v;  g = p1; b = p2; break;
    }
    return 'rgb(' + Math.round(r * 255) + ',' + Math.round(g * 255) + ',' + Math.round(b * 255) + ')';
}

//获取头发颜色和眼睛颜色
window.getColor = function getColor(part, colour){
    var lil_pc_i;
    for(var i = 0;i < part.length;i ++){
        if(part[i].variable == colour){
            lil_pc_i = i;
        };
    }
    var result = part[lil_pc_i].canvasfilter.blend;
    return result;
};
window.getSpecialColor = function getSpecialColor(part, colour){
    var result = "#" + part[colour];
    return result;
}

//获取天杀的衣服色号
window.resolveClothColor = function resolveClothColor(wornItem) {
    if (wornItem.colour == "custom") {
        var pc_cloth_hsv = wornItem.colourCustom.match(/\d+(\.\d+)?/g);
        return HSVtoRGB(pc_cloth_hsv[0], pc_cloth_hsv[1] * 78.125, pc_cloth_hsv[2] * 50);
    } 
    else if (wornItem.colour && wornItem.colour !== "primary") {
        return getColor(setup.colours.clothes, wornItem.colour);
    } else if (!wornItem.colour && !wornItem.type.includes("naked") && wornItem.colour_combat ) {
        return getColor(setup.colours.clothes, wornItem.colour_combat);
    } else {
		return getColor(setup.colours.clothes, "black");
	}
    return null;
};

//刷新gif让他们同步
window.reLoadAllGIFs = function reLoadAllGIFs(){
    function syncAllGIFs() {
            var images = document.querySelectorAll(".pc_div * , .eden_div *");
            
            images.forEach(img => {
                var currentSrc = img.src;
                img.src = '';
                img.src = currentSrc;
            });
        };
    window.addEventListener('load', function() {
            var images = document.querySelectorAll(".pc_div * , .eden_div *");
            
            images.forEach(img => {
                img.addEventListener('load', syncAllGIFs);
            });
    });}

//创造一个夜晚人物变暗蒙版
window.createNight = function createNight(url,div){
		var element = document.createElement("img");
		element.setAttribute("class","pc_night");
		element.setAttribute("src",night_img);
window.modSC2DataManager.getHtmlTagSrcHook().requestImageBySrc(url).then(base64Img => {
    applyNightMask(element, base64Img, div);
});}