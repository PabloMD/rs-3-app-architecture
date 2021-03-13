import { useState } from 'react';
import './Employees.css';

function Employees({ list }){
    const [employeeIndex, pickEmployee ] = useState();
    const getEmployee = () => {
        return employeeIndex !== undefined ? list[employeeIndex] : undefined;
    };

    const employeeDetails = () => {
        if(employeeIndex >= 0){
            const employee = getEmployee();
            return(
                <dl>
                    <dt>Age</dt>
                    <dd>{employee.age}</dd>
                    <dt>Salary</dt>
                    <dd>{employee.salary}</dd>
                    <dt>Position</dt>
                    <dd>{employee.position}</dd>
                </dl>
            );
        }else{
            return '<<<< Select Employee';
        }
    };
    return(
        <div className="employees">
            <div className="employeesList">
                <ul>
                { list.map((el, i) => {
                    return (
                        <li key={i} onClick={ () => pickEmployee(i) }>{`${el.firstName} ${el.lastName}`}</li>
                        );
                })}
                </ul>
            </div>
            <div className="employeesDetails">
                {employeeDetails()}
            </div>
        </div>
    );
}

export default Employees;