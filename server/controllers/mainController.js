//let's see what's happening with this , we are exporting a homepage function which is an async function what it does is it makes a object locals and then we are rendering index.ejs from views using res.render('index'); but here we are also passing the layout as layouts/front-page instead of layout as default main.ejs which is declared in the app.js file.

//express allows us to customize layout for each and every page of ours so when we write that layout: '../view/front-pgae' then it means we are passing the layout as different one from the default one.
exports.homepage = async (req, res) => {
    const locals = {
      title: "NodeJs Notes",
      description: "Free NodeJS Notes App.",
    }
    res.render('index', {
      locals,
      layout: '../views/layouts/front-page'
    });
  }

exports.about = async (req,res) => {
    const locals = {
        title: "About node js notes",
        description: "ti is a node js app",
    }
    res.render('about', locals);
}