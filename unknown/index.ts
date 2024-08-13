import express, { Request } from "express";

const app = express();

// default type = unknown
type PostRequest<T = unknown> = Request<void, void, T>;

interface CourseEnrollBody {
  userId: string;
  courseId: string;
}

// typed because we are using the body
app.post(
  "api/courses/enroll",
  async (req: PostRequest<CourseEnrollBody>, res) => {
    const { userId, courseId } = req.body;

    console.log(`User ${userId} enrolled in course ${courseId}`);

    res.status(200).send();
  }
);

/**
 * if we want to use the body we will have to specify
 * the type of the body in the request
 */
// not typed to see the difference
app.post("api/courses/enroll", async (req: PostRequest, res) => {
  const { userId, courseId } = req.body;

  console.log(`User ${userId} enrolled in course ${courseId}`);

  res.status(200).send();
});

/**
 * if we won't use the body, we don't need to specify the type
 */
// not using the body to see the difference
app.post("api/courses/enroll", async (_, res) => {
  res.status(200).send();
});
