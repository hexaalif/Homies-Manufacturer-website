import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl text-center my-14 font-bold">Blog</h1>
        <div>
        <div class="collapse collapse-arrow my-10 container rounded-box">
        <input type="checkbox" class="peer" />
        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <b>How will you improve the performance of a React Application?</b>
        </div>
        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Blog;
