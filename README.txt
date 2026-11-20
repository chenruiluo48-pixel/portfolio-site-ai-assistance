Chenrui Luo — Electrical Engineer
========================================

打开方式 / Open
双击 index.html，用 Chrome 或 Edge 打开即可。不需要安装 Node.js。
Double-click index.html in Chrome or Edge. No Node.js installation is needed.
请保留整个文件夹，不能只单独发送 index.html。
Keep the entire folder together, including media and the CV.

修改内容 / Customise
编辑 portfolio.config.js 可修改姓名、联系信息、头像、项目和经历。
Edit portfolio.config.js, then refresh the browser. No rebuild is required.
所有文件路径都相对于 index.html；例如 ./media/project-converter-bright.webp。
All asset paths are relative to index.html.
完整开发源码位于项目根目录的 src/，使用 React + Vite。
The full React + Vite development source is in the project's src/ folder.
重新导出会从 public/portfolio.config.js 更新此处的配置，
因此需要长期保留的内容修改应同时保存到 public/portfolio.config.js。
Regenerating the export copies public/portfolio.config.js here again;
save long-term content edits in that source file as well.

GitHub Pages
将此文件夹里的所有文件和 media 文件夹一起放到发布目录。
Upload the contents of this folder, including media/, not only index.html.
选择发布分支和目录。请保留 .nojekyll。
Select the publishing branch and directory. Keep .nojekyll.
本次没有自动修改 GitHub 仓库或发布线上网站。
No remote repository has been modified and no website has been published.

素材 / Assets
个人资料和三个工程项目来自提供的简历。个人照片已换为本次提供的校园户外JPEG。
Profile facts and three academic engineering projects come from the supplied CV.
The portrait uses the new supplied outdoor JPEG, framed through CSS only.
三张项目图由AI生成，是工程展示示意图，并非实际项目实拍或验证过的电路图。
The three project images are AI-generated illustrations, not actual-build photographs or verified schematics.
三张新图采用参考图中的白底蓝色说明图风格，保留完整流程。
The current project visuals use the reference's bright white-and-blue workflow style.
高清原图和当前提示词保存在开发源码的 assets/generated-projects/ 和 IMAGE-PROMPTS-BRIGHT.md。
Original renders and prompts are archived with the development source.
首页背景来自提供的 Video.mp4，网页文件为 media/hero-video.mp4。
The hero uses the supplied Video.mp4, played from media/hero-video.mp4.
保留1920x1080、30fps、约10.57秒，支持静音循环、暂停与减少动态效果。
Playback retains 1920x1080 at 30fps for about 10.57 seconds, with muted looping and pause.
完整原视频保存在开发源码的 assets/hero-original.mp4 中。
The original video is archived with the development source at assets/hero-original.mp4.
React and React DOM licenses are included in THIRD-PARTY-LICENSES.txt.
卡片采用所提供BorderGlow文档的边缘追光样式，触屏和减少动态效果模式下显示静态边框。
Cards use the supplied BorderGlow style; touch and reduced-motion modes use static edges.
React Bits attribution and license are included in THIRD-PARTY-LICENSES.txt.
第四屏三张能力图片由AI生成，展示电力电子、嵌入式控制、建模与测试。
The fourth screen uses three AI-generated capability illustrations: power electronics,
embedded control, and modelling/testing. These are conceptual illustrations, not actual lab photos.
能力文字和图路径同样在portfolio.config.js中修改；完整提示词在源码的IMAGE-PROMPTS-CAPABILITIES.md。
Edit capability content and images in portfolio.config.js. Full prompts are archived with the source.
