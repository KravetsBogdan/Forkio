// import { tree } from 'gulp'
// import svgSprite from 'gulp-svg-sprite'

// export const svgSprite = () => {
//     return app.gilp.src(`${app.path.src.svgicons}`, {})
//         .pipe(app.plugins.plumber(
//             app.plugins.notify.onError({
//                 title: "SVG",
//                 message: "Error: <%= error.message %>"
//             })
//         ))
//         .pipe(svgSprite({
//             mode: {
//                 stack: {
//                     sprite: '../icons/icons.svg',
//                     //Створюєм сторінку з переліком іконок
//                     example: tree
//                 }
//             },
//         }))
//         .pipe(app.gulp.dest(`${app.path.build.images}`))
// }