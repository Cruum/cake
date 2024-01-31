import { BsPersonCircle } from "react-icons/bs"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../theme"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import ToggleAdmin from "./admin/ToggleAdmin"

export default function Profile() {
  const { name } = useParams();
  const navigate = useNavigate();
  const saveName = localStorage.getItem('name');
  const [username, setUsername] = useState(name  || saveName || ''); 

  useEffect(() => {
      localStorage.setItem('name', JSON.stringify(username));
  }, [username]);

    console.log({username})



  return (
    <ProfileStyled>
      <div className="info">
        <p>
          Salut <b>{username}</b>
        </p>
        <Link to="/">
          <div className="description">
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>
      <div className="picture">
        <BsPersonCircle />
      </div>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;

  .info {
    text-align: right;
    margin-right: 10px;
    p {
      margin: 0;
      color: ${theme.colors.greyBlue};
      b {
        color: ${theme.colors.primary};
      }
    }
    a {
      text-decoration: none;
      .description {
        &:hover {
          text-decoration: underline;
          color: ${theme.colors.greyDark};
        }
        small {
          font-size: ${theme.fonts.size.XXS};
          color: ${theme.colors.greyBlue};
          font-weight: ${theme.fonts.weights.medium};
          text-decoration: none;
          position: relative;
          bottom: 2px;
        }
      }
    }
  }

  .picture {
    /* border: 1px solid red; */
    height: auto;
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`
