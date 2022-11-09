import Select from 'react-select';

function FilterRate({ results, handleSelect }) {
  let rateOptions = [];

  results.forEach((item) => {
    let itemExist = rateOptions.find(
      (itm2) => itm2.label === item.vote_average
    );

    if (!itemExist) {
      rateOptions.push({
        label: item.vote_average,
        value: item.id,
      });
    }
  });

  return (
    <div>
      <Select
        placeholder='Filter by Rate'
        options={rateOptions}
        onChange={(values) => handleSelect(values)}
        className='text-black'
      />
    </div>
  );
}

export default FilterRate;
