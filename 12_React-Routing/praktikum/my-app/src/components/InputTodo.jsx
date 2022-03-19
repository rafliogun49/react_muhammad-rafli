const InputTodo = () => {
  return (
    <>
      <div className="col-lg-6 col-md-8">
        <div className="row">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control py-2"
              placeholder="What's to do for today?"
              aria-label="todo"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-primary py-2" type="button">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputTodo;
