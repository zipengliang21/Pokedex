import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DropDownList,
    // DropDownListFilterChangeEvent,
} from "@progress/kendo-react-dropdowns";
import styled from "styled-components";
// import {
//     CompositeFilterDescriptor,
//     filterBy,
//     FilterDescriptor,
// } from "@progress/kendo-data-query";

const FilterBarDiv = styled.form`
  color: blue;
  position: fixed;
  left: 400px;
  top: 0;

`

const allData = [
    { id: 1, text: "Normal" },
    { id: 2, text: "Fire" },
    { id: 3, text: "Water" },
    { id: 4, text: "Grass" },
    { id: 5, text: "Flying" },
    { id: 6, text: "Fighting" },
    { id: 7, text: "Poison" },
    { id: 8, text: "Electric" },
    { id: 9, text: "Ground" },
    { id: 10, text: "Rock" },
    { id: 11, text: "Psychic" },
    { id: 12, text: "Ice" },
    { id: 13, text: "Bug" },
    { id: 14, text: "Ghost" },
    { id: 15, text: "Steel" },
    { id: 16, text: "Dragon" },
    { id: 17, text: "Dark" },
    { id: 18, text: "Fairy" },
];

const FilterBar = () => {
    const [data, setData] = React.useState(allData.slice());

    // const filterData = (filter: FilterDescriptor | CompositeFilterDescriptor) => {
    //     const data = allData.slice();
    //     return filterBy(data, filter);
    // };

    // const filterChange = (event: DropDownListFilterChangeEvent) => {
    //     const newData =
    //         event.filter.value.length > 3
    //             ? filterData(event.filter)
    //             : allData.slice();
    //     setData(newData);
    // };

    return (
        <FilterBarDiv>
        <DropDownList
            data={data}
            textField="text"
            filterable={true}
            // onFilterChange={filterChange}
        />
        </FilterBarDiv>
    );
};


export default FilterBar;