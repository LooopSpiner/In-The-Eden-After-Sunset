# 日落伊甸园 In the Eden After Sunset
这是个为伊甸小屋以及室外添加小地图的mod。

交流群：390135062，可以在群内报告bug或者讨论mod内容

## 添加内容

添加了一些拓展剧情、两张地图、若干pc与伊甸互动的动画（以及奇怪的收音机）。
<details><summary><b>展开查看图片</b></summary>
 
![image](https://github.com/LooopSpiner/In-The-Eden-After-Sunset/blob/main/images_in_md/1.gif)
![image](https://github.com/LooopSpiner/In-The-Eden-After-Sunset/blob/main/images_in_md/2.png)
</details>

### 使用方法

<b>请先安装前置模组[**简易框架**](https://github.com/emicoto/DOLMods/)！！！

请先安装前置模组[**简易框架**](https://github.com/emicoto/DOLMods/)！！！

请先安装前置模组[**简易框架**](https://github.com/emicoto/DOLMods/)！！！</b>

<br>
安装顺序为：
<b>i18n → 简易框架 → 日落伊甸园（本mod）</b>

在右侧的releases中下载模组资源。

<br>
注意：本人初学js，安装这个模组可能会导致一些bug，请在issues内反馈给我。

可能不兼容老版本，5.1.3或5.2.8经过测试可以正常游玩，已知美发沙龙和自定义发色mod可以正常兼容。

* <b>如果有人想要下载，请将这个仓库的链接发送给他。</b>
  * 即不要二次上传未经你修改过的mod版本<br>

* <b>可以任意修改这个mod的代码或添加、修改贴图。</b>
  * 例如，你可以修改这个mod的代码，在其他场景制作地图
  * 或者修改mod原有的贴图，制作美化版本
  * 你可以分享mod的使用截图<br>

* <b>二次修改并上传这个mod，请注明原作者（再三棘）。</b>

### 更新日志

2024/11/2 v1.0.1 模组发布！

2024/11/2 v1.0.3 修复了缩放导致人物和地图错位的bug

2024/11/16 v1.0.7 修复了当衣服染色为"primary"色的时候，报错的bug

### 特别感谢

帮助过我的modder们：
 * 苯环
 * Lyoko-Jeremie
 * 科尔
 * polyethylene（我的朋友）
 * 米谢利亚
 * 狐千月

贡献剧情：
 * Arcous

 
   * 以及模组群内的所有老师们！
   * 贡献收音机passage内新歌曲和文本的玩家们！
   * 还有正在游玩这款模组的你！
   * 你们是最好的！^^
  
     
### 目前已知bug

```diff
- 使用旧版本简易框架会报错，请把简易框架更新至最新版本。
```
有时动画会错误显示（尽力修复）

夜晚时，部分动图会出现蒙版和动画本体不同步的情况（白边，这个问题似乎不能修复）

老存档可能会出现伊甸受伤贴图错误显示的问题，如果在安装mod前经历过伊甸受伤事件，用言灵 [[救一下啊|$passage][$eden_hurt = 1]] 补救，或点击进入小屋，会自动给这个变量赋值以修复bug

使用safari浏览器且为ios高版本的时候，人物的发色、衣服颜色渲染将出现错误，修不来

4.0等老版本不推荐使用，会出现很多兼容性问题，如果你执意要用4.0的游戏版本运行这个mod，需要把twee文件中关于weather的判别语句全部删除。
<details><summary><b>代码示例</b></summary>
 <br>
 查找eden_indoor_map.twee文件中的以下代码，并把他们删除（一共四处，全部删除）
 
 ```diff
&& Weather.dayState == "night" && (Weather.precipitation == "rain" || Weather.name == "thunderStorm") && V.weekly.edenStory)
 ```
<br>
查找eden_cabin_map.twee文件中的以下代码，并把他们删除（从图1框选的部分一直到图2全部删除，不要动其他部分）

![image](https://github.com/LooopSpiner/In-The-Eden-After-Sunset/blob/main/images_in_md/4.png)
![image](https://github.com/LooopSpiner/In-The-Eden-After-Sunset/blob/main/images_in_md/3.png)
<br>
<b>警告：如果你在游玩4.0版本的游戏，且不愿意更新版本，请按照上文修改代码，不要删除额外的代码！这样做可能会导致人物错误显示和室外天气特效被删除，请知晓你在做什么。</b>
</details>

# ENG VERSHION

Thanks to Reibies for helping me translate the English readme <3

In particular, non-Chinese users do not need to install the i18n mod (this mod is used to translate dol's in-game text into Chinese), only the simple framework as the front mod.

[**English README**](https://github.com/Reibies/In-The-Eden-After-Sunset/blob/main/README_EN.md)

<br><br>
**This is the original readme**

This is a mod loaded using ModLoader that depends on the Simple Frameworks mod. 

If you wish to use this mod, please install [**Simple Frameworks**](https://github.com/emicoto/DOLMods/) first. 

<br>
<b>Note that if you install this mod, your game may display some newly added passages in Chinese, or some compatibility issues may arise. Please decide for yourself whether to install it.</b>
