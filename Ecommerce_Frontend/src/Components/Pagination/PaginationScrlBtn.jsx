import React,{useState,useEffect} from 'react'

const PaginationScrlBtn = ({ showPerPage, onPaginationChange, total }) => {

  const [counter, setCounter] = useState(1);

  const [numberOfButtons, setNumberOfButoons] = useState(
    Math.ceil(total / showPerPage)
  );

  useEffect(  () => {
    

  },[]);

  useEffect(() => {

    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);

  }, [counter]);



  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div className='pagination_btn'>

        <button onClick={() => onButtonClick("prev")}>Prev</button>
        {
            counter
        }
        <button onClick={() => onButtonClick("next")}>Next</button>
    </div>
  )
}

export default PaginationScrlBtn