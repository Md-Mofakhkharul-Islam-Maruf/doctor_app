import React from "react";
import Container from "../components/shared/Container";

const Blogs = () => {

  return (
    <div>
      <div className="my-10 text-center">
        <h1 className="text-4xl font-bold">Blogs</h1>
        <p className="my-5">
          Let's explore some basic concept that will make you a good developer
        </p>
      </div>

      <Container className="pt-10">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            1. What is useState and how does it work in React?
          </div>
          <div className="collapse-content">
            <p>
              <code>useState</code> is a React Hook that allows you to add and
              manage local state in functional components. It returns the
              current state and a function to update it. When the state is
              updated, the component re-renders.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            2. What is the purpose of useEffect in React?
          </div>
          <div className="collapse-content">
            <p>
              <code>useEffect</code> lets you perform side effects in function
              components, such as fetching data, setting up subscriptions, or
              manually updating the DOM. It runs after the render and can be
              controlled by dependencies.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            3. What is a custom hook in React and when should you use one?
          </div>
          <div className="collapse-content">
            <p>
              A custom hook is a reusable function that contains logic using
              other hooks. You should use one to extract and reuse stateful
              logic between components for better organization and
              maintainability.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            4. Difference between controlled and uncontrolled components? Which
            one is better?
          </div>
          <div className="collapse-content">
            <p>
              Controlled components use React state to manage form data, while
              uncontrolled components rely on the DOM. Controlled components
              offer better control, validation, and predictability, making them
              generally the preferred approach.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            5. Tell us something about useFormStatus()
          </div>
          <div className="collapse-content">
            <p>
              <code>useFormStatus</code> is a hook used with Server Actions in
              frameworks like Next.js. It provides real-time feedback about a
              form’s submission state (like pending or success), which helps in
              managing UI behavior such as disabling buttons or showing loaders.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
