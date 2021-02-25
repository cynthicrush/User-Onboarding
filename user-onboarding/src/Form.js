import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    margin: 30px;
`
const StyledDiv = styled.div`
    margin-bottom: 30px;
`
const StyledDivs = styled.div`
    margin-bottom: 20px;
`

const Form = (props) => {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    const onChange = evt => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <StyledH1>User Onboarding</StyledH1>
                <StyledDiv className='inputs'>
                    <StyledDivs>
                        <label>Name
                            <input value={values.name} onChange={onChange} name='name' type='text' />
                        </label>
                    </StyledDivs>
                    
                    <StyledDivs>
                        <label>Email
                            <input value={values.email} onChange={onChange} name='email' type='email' />
                        </label>
                    </StyledDivs>
                    
                    <StyledDivs>
                        <label>Password
                            <input value={values.password} onChange={onChange} name='password' type='password' />
                        </label>
                    </StyledDivs>
                    
                    <StyledDivs>
                        <label>Terms of Service
                            <input onChange={onChange} name='tos' type='checkbox' checked={values.tos} />
                        </label>
                    </StyledDivs>
                    
                    <StyledDivs>
                        <button disabled={disabled}>Submit</button>
                        <div className='errors' />
                        <div>{errors.name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                        <div>{errors.tos}</div>
                    </StyledDivs>
                        
                </StyledDiv>
            </form>
        </div>
        
        
    )
};

export default Form;
