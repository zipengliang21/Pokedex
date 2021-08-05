import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import EditPokemon from "../components/EditPokemon";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { usePokemonList } from "../hooks/usePokemonList";
import {FormattedMessage} from "react-intl";


const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(53, 57, 30, 0.4)",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  switchContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    color: "#616161",
    margin: "10px",
    width: "100px",
    size: "small",
  },
  copyright: {
    marginBottom: 0,
  },
  admin: {},
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    marginLeft: theme.spacing(2),
    alignItems: "center",
  },
}));

const Background = styled.div`
  width: 850px;
  margin: 0 auto;
  background: inherit;
  @media (max-width: 875px) {
    width: 418px;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  @media (max-width: 875px) {
    width: 418px;
  }
  @media (max-width: 576px) {
    width: 230px;
  }
`;

const FormEntry = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Warning = styled.div`
  display: flex;
  background: inherit;
  padding: 20px 0;
  span {
    font-size: 26px;
    color: orange;
    text-align: center;
    margin: 0 auto;
    font-weight: bold;
    @media (max-width: 875px) {
      width: 418px;
    }
    @media (max-width: 576px) {
      width: 100%;
      font-size: 13px;
    }
  }
  @media (max-width: 875px) {
    width: 418px;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const AdminAddPage = (props: any) => {
  const {addPokemon, deletePokemon } =
    usePokemonList();
  const { register, handleSubmit } = useForm();
  const classes = useStyles();
  const [flag, setFlag] = React.useState(1);
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [ability, setAbility] = React.useState("");
  const [hiddenAbility, setHiddenAbility] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [baseHp, setBaseHp] = React.useState("");
  const [baseAttack, setBaseAttack] = React.useState("");
  const [baseSpAttack, setBaseSpAttack] = React.useState("");
  const [baseDefence, setBaseDefence] = React.useState("");
  const [baseSpDefence, setBaseSpDefence] = React.useState("");
  const [baseSpeed, setBaseSpeed] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const handleChangeFlag = (event: any) => {
    const temp = event.currentTarget.id;
    if (temp === "Add") {
      setFlag(1);
    } else {
      setFlag(2);
    }
  };

  const handleChangeName = (event: any) => {
    const temp = event.target.value;
    setName(temp);
  };

  const handleChangeId = (event: any) => {
    const temp = event.target.value;
    setId(temp);
  };

  const handleChangeType = (event: any) => {
    const temp = event.target.value;
    setType(temp);
  };

  const handleChangeAbility = (event: any) => {
    const temp = event.target.value;
    setAbility(temp);
  };

  const handleChangeHiddenAbility = (event: any) => {
    const temp = event.target.value;
    setHiddenAbility(temp);
  };

  const handleChangeHeight = (event: any) => {
    const temp = event.target.value;
    setHeight(temp);
  };

  const handleChangeWeight = (event: any) => {
    const temp = event.target.value;
    setWeight(temp);
  };

  const handleChangeBaseHp = (event: any) => {
    const temp = event.target.value;
    setBaseHp(temp);
  };

  const handleChangeBaseAttack = (event: any) => {
    const temp = event.target.value;
    setBaseAttack(temp);
  };

  const handleChangeBaseSpAttack = (event: any) => {
    const temp = event.target.value;
    setBaseSpAttack(temp);
  };

  const handleChangeBaseDefence = (event: any) => {
    const temp = event.target.value;
    setBaseDefence(temp);
  };

  const handleChangeBaseSpDefence = (event: any) => {
    const temp = event.target.value;
    setBaseSpDefence(temp);
  };

  const handleChangeBaseSpeed = (event: any) => {
    const temp = event.target.value;
    setBaseSpeed(temp);
  };

  let admin =
    props.currentUser && props.currentUser.isAdmin ? (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.switchContainer}>
          <div>
            <Button
              id="Add"
              size="small"
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={handleChangeFlag}
            >
                <FormattedMessage id='Add'/>
            </Button>
            <Button
              id="Delete"
              size="small"
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={handleChangeFlag}
            >
                <FormattedMessage id='Delete'/>
            </Button>
          </div>
        </div>
        <form className={classes.form} noValidate hidden={flag !== 1}>
          <FormEntry>
            <label><FormattedMessage id='Pokemon_Name'/>:</label>
            <input
              type="text"
              value={name}
              onChange={handleChangeName}
              style={{ width: "100%", margin: "10px auto" }}
            />
          </FormEntry>
          <FormEntry>
            <label><FormattedMessage id='Pokemon_Type'/>:</label>
            <input
              type="text"
              value={type}
              onChange={handleChangeType}
              style={{ width: "100%", margin: "10px auto" }}
            />
          </FormEntry>
          <FormEntry>
            <label><FormattedMessage id='Normal_Ability'/>:</label>
            <input
              type="text"
              value={ability}
              onChange={handleChangeAbility}
              style={{ width: "100%", margin: "10px auto" }}
            />
          </FormEntry>
          <FormEntry>
            <label><FormattedMessage id='Hidden_Ability'/>:</label>
            <input
              type="text"
              value={hiddenAbility}
              onChange={handleChangeHiddenAbility}
              style={{ width: "100%", margin: "10px auto" }}
            />
          </FormEntry>
          <FormEntry>
            <label><FormattedMessage id='Height'/>:</label>
            <input
              type="text"
              value={height}
              onChange={handleChangeHeight}
              style={{ width: "100%", margin: "10px auto" }}
            />
          </FormEntry>
          <FormEntry>
            <label><FormattedMessage id='Weight'/>:</label>
            <input
              type="text"
              value={weight}
              onChange={handleChangeWeight}
              style={{ width: "100%", margin: "10px auto" }}
            />
          </FormEntry>
          <FormEntry>
            <br></br>
            <label><FormattedMessage id='Stat'/>: </label>
            <br></br>
            <div>
              <label><FormattedMessage id='Hp'/>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                type="text"
                value={baseHp}
                onChange={handleChangeBaseHp}
                style={{ width: "100%", margin: "10px auto" }}
              />
              <label><FormattedMessage id='Attack'/>: &nbsp;&nbsp;</label>
              <input
                type="text"
                value={baseAttack}
                onChange={handleChangeBaseAttack}
                style={{ width: "100%", margin: "10px auto" }}
              />
            </div>
            <div>
              <label><FormattedMessage id='Sp_Atk'/>: &nbsp;&nbsp;</label>
              <input
                type="text"
                value={baseSpAttack}
                onChange={handleChangeBaseSpAttack}
                style={{ width: "100%", margin: "10px auto" }}
              />
              <label><FormattedMessage id='Sp_Def'/>:&nbsp;&nbsp;&nbsp;</label>
              <input
                type="text"
                value={baseSpDefence}
                onChange={handleChangeBaseSpDefence}
                style={{ width: "100%", margin: "10px auto" }}
              />
            </div>
            <div>
              <label> <FormattedMessage id='Defense'/>: </label>
              <input
                type="text"
                value={baseDefence}
                onChange={handleChangeBaseDefence}
                style={{ width: "100%", margin: "10px auto" }}
              />
              <label><FormattedMessage id='Speed'/>: &nbsp;&nbsp;&nbsp;</label>
              <input
                type="text"
                value={baseSpeed}
                onChange={handleChangeBaseSpeed}
                style={{ width: "100%", margin: "10px auto" }}
              />
            </div>
          </FormEntry>
          <p>&nbsp;</p>
          <Button
            onClick={() =>
              addPokemon(
                name,
                type,
                ability,
                hiddenAbility,
                height,
                weight,
                baseHp,
                baseAttack,
                baseAttack,
                baseSpDefence,
                baseDefence,
                baseSpeed
              )
            }
            variant="contained"
            color="primary"
            size="small"
            style={{ width: "100px", margin: "10px auto" }}
          >
              <FormattedMessage id='Add'/>
          </Button>
        </form>
        <form className={classes.form} noValidate hidden={flag !== 2}>
          <FormEntry>
            <label><FormattedMessage id='Pokemon_ID'/>:</label>
            <input
              type="text"
              value={id}
              onChange={handleChangeId}
              placeholder="001"
              style={{ width: "29em", margin: "10px auto" }}
            />
          </FormEntry>
          <FormEntry>
            <label><FormattedMessage id='Pokemon_Name'/>:</label>
            <label>(<FormattedMessage id='ConfirmDelete'/>):</label>
            <input
              type="text"
              value={name}
              onChange={handleChangeName}
              style={{ width: "29em", margin: "10px auto" }}
            />
            <p>&nbsp;</p>
          </FormEntry>
          <Button
            onClick={() => deletePokemon(id, name)}
            variant="contained"
            color="secondary"
            size="small"
            style={{ width: "100px", margin: "10px auto" }}
          >
              <FormattedMessage id='Delete'/>
          </Button>
        </form>
      </Container>
    ) : (
      <Warning>
        <span><FormattedMessage id='Login_Through_Admin'/></span>
      </Warning>
    );

  return (
    <Background>
      <Collapse in={open}/>
      <EditPokemon />
      <Wrapper>
        {admin}
      </Wrapper>
    </Background>
  );
};

export default AdminAddPage;
