import express from 'express';
import NewsController from '../controller/NewsController.js';
import RouteMiddleware from "../middleware/RouteMiddleware.js";
import UploadMiddleware from "../middleware/UploadMiddleware.js";

const auth = new RouteMiddleware();
const instanceNews= new NewsController();
const newsRoute = express.Router();

const uploadInstance = new UploadMiddleware();
const upI = uploadInstance.upload("news")

newsRoute.get('/', instanceNews.index);
newsRoute.post('/',auth.check,upI.single("image"), instanceNews.store);
newsRoute.get('/:id', instanceNews.show);
newsRoute.put('/:id',auth.check, instanceNews.update);
newsRoute.delete('/:id',auth.check, instanceNews.destroy);

export default newsRoute;