import express from "express";
import corsPrefetch from "cors-prefetch-middleware";
import imagesUpload from "images-upload-middleware";

const app = express();

app.use("/static", express.static("./server/static"));

app.use(corsPrefetch);

app.post("/multiple", imagesUpload("./imge", "http://localhost:3000/", true));

app.post("/imge", imagesUpload("./imge", "http://localhost:3000/"));

app.listen(3000, () => {
  console.log("Listen: 4000");
});
