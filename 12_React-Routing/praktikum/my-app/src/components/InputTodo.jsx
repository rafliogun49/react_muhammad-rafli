const InputTodo = () => {
  return (
    <>
      <div className="col-lg-6 col-md-8">
        <div className="row">
          <div className="input-group mb-4">
            <input
              type="text"
              class="form-control py-2"
              placeholder="What's to do for today?"
              aria-label="todo"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button className="btn btn-primary py-2" type="button">
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputTodo;
