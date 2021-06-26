const express = require("express");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const app = express();

//Express.json
app.use(express.json({ extended: true }));

// require Routes
const imageRouter = require("./routes/imagesRoutes/imagesRoutes");
const indexRouter = require("./routes/index");
const authRegisterRouter = require("./routes/authRoutes/authRegister.routes");
const organizationsRouter = require("./routes/organizations");
const authRouter = require("./routes/authRoutes/authMe.routes");
const authLoginRouter = require("./routes/authRoutes/authLogin.routes");
const newsGetRouter = require('./routes/newsRoutes/getNews.routes')
const newsPutRouter = require('./routes/newsRoutes/putNews.routes')
const membersPutRouter = require('./routes/MembersRouter/MembersPut')
const newsIdGetRouter = require("./routes/newsRoutes/getNewsIdRouter");
const userGetRouter = require("./routes/userRoutes/userGetRoutes");
const deleteUserRouter = require("./routes/userRoutes/UserDelete");
const TestimonialsPostRouter = require("./routes/TestimonialsPost");
const getMembers = require("./routes/membersRoutes/getMembers");
const deleteCategory = require("./routes/categoryRoutes/deleteCategory.routes");
const updateCategory = require("./routes/categoryRoutes/putCategory.routes");
const postCategoryRouter = require("./routes/categoryRouter/postCategory.routes");
const categoriesListRouter = require("./routes/categoryRoutes/getCategoriesList.routes");

const deleteMembers = require("./routes/membersRoutes/deleteMembers");
const getTestimonials = require("./routes/testimonialsRouter/getTestimonials");

const deleteTestimonials = require("./routes/testimonialsIdPutRouter/deleteTestimonials");
const contactsGetRouter = require("./routes/contactRouter/getContacts");
const activitiesPostRouter = require("./routes/ActivitiesRouter/postActivitiesRouter");
const activitiesPutRouter = require("./routes/ActivitiesRouter/putActivitiesRouter");

//require news routes.
const newsPostRouter = require("./routes/newsRoutes/postNews.routes");

// Routes in use

app.use('/', membersPutRouter);
const deleteNews = require('./routes/newsRoutes/deleteNews.routes');

// cors
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes in use
app.use("/", indexRouter, deleteUserRouter);
app.use("/auth", authRouter, authLoginRouter, authRegisterRouter);
app.use("/organizations", organizationsRouter);
app.use("/users", userGetRouter);
app.use("/image", imageRouter);
app.use("/news/:idNews", newsIdGetRouter);
app.use("/news", newsGetRouter, newsPostRouter, newsPutRouter, deleteNews);
app.use("/contacts", contactsGetRouter, /* postContact */);
app.use("/activities", activitiesPostRouter, activitiesPutRouter);
app.use("/testimonials",getTestimonials, TestimonialsPostRouter, /* testimonialsIdPutRouter, */ deleteTestimonials);
app.use("/members", getMembers, deleteMembers);

// Categories
app.use("/categories", categoriesListRouter, postCategoryRouter, updateCategory, deleteCategory);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
