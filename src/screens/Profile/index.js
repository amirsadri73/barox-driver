import React, { useState, useCallBack, useEffect, useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  TextField,
  Button,
  Typography,
  CircularProgress,
  //Select,
  NativeSelect,
  FormControl,
  InputLabel
} from "@material-ui/core";
import Axios from "axios";
import { withRouter } from "react-router-dom";

import stateContext from "../../contexts";

import { url } from "../../constans";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {
    padding: "6% 5%",
    display: "flex",
    flexDirection: "column"
  },
  grid: {
    width: "100%",
    height: "100%",
    padding: "5%"
  },
  title: { marginBottom: "20px" },
  button: {},
  progress: {
    color: theme.palette.common.white
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

  const ProfileScreen = props => {
    const DEFAULT_PROVINCES = [
      {
          "ID": "8709ceb7-8c34-49dd-9f69-027b1bf2fc9d",
          "Title": "خوزستان"
      },
      {
          "ID": "64c5bbee-ed34-45c7-85d3-0cc33f7a4738",
          "Title": "استان ناشناخته"
      },
      {
          "ID": "178a6e76-6982-4d40-9b9a-0e83c1e01f96",
          "Title": "کردستان"
      },
      {
          "ID": "492c3fd1-848f-4ed7-9206-10052693b6a0",
          "Title": "کرمان"
      },
      {
          "ID": "f89319a4-d730-40a0-8b85-10871693c9c7",
          "Title": "تهران"
      },
      {
          "ID": "34d88cc5-796a-49a6-872c-21a24691cc79",
          "Title": "کهکیلویه و بویراحمد"
      },
      {
          "ID": "e64ecea1-5179-456c-9df9-2ef52d6c05e2",
          "Title": "آذربایجان غربی"
      },
      {
          "ID": "aee16664-0dd4-406a-adf1-37a392abe5da",
          "Title": "بوشهر"
      },
      {
          "ID": "d18fe6a7-919b-4158-bbb6-3b8b65ebe2f0",
          "Title": "آذربایجان شرقی"
      },
      {
          "ID": "4f128f15-8cd3-4463-8549-3e76408b0760",
          "Title": "فارس"
      },
      {
          "ID": "1ffd31aa-519e-4519-b02b-3ef76253803c",
          "Title": "چهارمحال و بختیاری"
      },
      {
          "ID": "88101345-ebd0-452e-8115-4616d616452f",
          "Title": "کرمانشاه"
      },
      {
          "ID": "f25acff8-53d5-4312-af31-59e38449533f",
          "Title": "گیلان"
      },
      {
          "ID": "92919db6-ed5e-4fc6-83fa-5a95c870ecb9",
          "Title": "اربیل"
      },
      {
          "ID": "1eb0dbae-b018-4a68-9aa4-6ecab1b917e9",
          "Title": "البرز"
      },
      {
          "ID": "b6f0a2a0-ccb1-40a1-b29f-77efd7470376",
          "Title": "خراسان جنوبی"
      },
      {
          "ID": "ba0bd78e-2ef1-4822-b1e7-78026c0fe8df",
          "Title": "سیستان و بلوچستان"
      },
      {
          "ID": "44567df5-3ae5-486f-9ac7-7f15638eca07",
          "Title": "خراسان شمالی"
      },
      {
          "ID": "7572c9a8-043c-4c61-82a0-8b7e15bbbeab",
          "Title": "قم"
      }
  ];

  const DEFAULT_CITIES = [
    {
        "ID": "45edf623-9574-4fed-874d-00664b76b3fa",
        "Title": "بندر گناوه"
    },
    {
        "ID": "d08a41ef-3d88-4444-944a-03d83f0cb215",
        "Title": "قزوین"
    },
    {
        "ID": "194d4880-8624-4ec0-998a-0623402bd711",
        "Title": "عسلویه"
    },
    {
        "ID": "91a6b3d5-c2dc-412c-9c18-063cef96dceb",
        "Title": "آباده"
    },
    {
        "ID": "b0c4c3d9-9f7a-4f1e-b50f-06fa10679c01",
        "Title": "اصفهان"
    },
    {
        "ID": "64fb6e50-1fe2-4034-ac41-0945560dc278",
        "Title": "رودبار"
    },
    {
        "ID": "bdbf7739-dcd3-4ec0-93bb-0ac7d2110338",
        "Title": "مشکین شهر"
    },
    {
        "ID": "a3b9a75f-e1c2-4e7c-af43-0b7f676cfaca",
        "Title": "شهرکرد"
    },
    {
        "ID": "76312ad0-8d7a-42a6-9448-0c412983493d",
        "Title": "ورامین"
    },
    {
        "ID": "125c8249-12f3-4231-8c35-0d09aefc7830",
        "Title": "جیرفت"
    },
    {
        "ID": "e5b4da11-ecbd-4c3a-b9e7-0e0998f67f6f",
        "Title": "قشم"
    },
    {
        "ID": "fb267ea3-d5c0-448b-82cc-0fbad628cd3a",
        "Title": "سلماس"
    },
    {
        "ID": "4dcd803c-49e4-425b-a55a-11df50b0d199",
        "Title": "رودان"
    },
    {
        "ID": "ad21b089-788d-4554-aa9c-16b94b251c7d",
        "Title": "مورچه خور"
    },
    {
        "ID": "f9e4e784-316d-4b49-9f4a-16c93701d17d",
        "Title": "تاکستان"
    },
    {
        "ID": "8eb7628e-05af-487c-a80f-1864e4eb9c7c",
        "Title": "گنبد"
    },
    {
        "ID": "f5a97bed-42f7-4324-a93b-191539de4b91",
        "Title": "رشت"
    },
    {
        "ID": "ecaa07ae-785c-46c7-ba82-1923f868f497",
        "Title": "خمین"
    },
    {
        "ID": "e424a342-b17a-4bf7-8f36-1cefdb201d96",
        "Title": "پلدختر"
    },
    {
        "ID": "a58b2016-1f52-4e81-b57d-1d3c19ffdcf8",
        "Title": "لامر"
    },
    {
        "ID": "f72a2932-9aee-477a-895a-1d4e65936816",
        "Title": "مرودشت"
    },
    {
        "ID": "7c553946-4248-43b4-8069-1d64ea79fad3",
        "Title": "فومن"
    },
    {
        "ID": "0e914a7c-a2cb-49ce-b118-1ddb00b6f2c0",
        "Title": "یزد"
    },
    {
        "ID": "ac7b7ce8-f977-4a60-a442-1fac52a790ff",
        "Title": "مراغه"
    },
    {
        "ID": "c5ae508e-91cf-4392-b66c-2043756c960c",
        "Title": "حصارک"
    },
    {
        "ID": "de1b97ee-c078-4f58-bc12-208c5d993392",
        "Title": "ملایر"
    },
    {
        "ID": "e1b42e8a-7f68-4b5c-ad6e-21bee1070aa4",
        "Title": "پیرانشهر"
    },
    {
        "ID": "dc4eb392-26a7-4a1d-84cb-224de2c4e2ff",
        "Title": "قروه"
    },
    {
        "ID": "451d8858-5309-40af-bf30-22ac8694bcd0",
        "Title": "بجستان"
    },
    {
        "ID": "05c653ad-b30a-499e-8df8-23747746a748",
        "Title": "کاشمر"
    },
    {
        "ID": "66957c79-e9fd-4f77-9cd3-25b9d9e1514a",
        "Title": "زاهدان"
    },
    {
        "ID": "923c8270-4f5d-45b0-bf75-2804fee67e99",
        "Title": "امیدیه"
    },
    {
        "ID": "067362b4-c6bc-43cd-9e82-284c11bae94a",
        "Title": "کپکان"
    },
    {
        "ID": "7f803c17-6533-4965-923a-286d4935ed2e",
        "Title": "نجف آباد"
    },
    {
        "ID": "0ea7602e-c231-4cea-854f-2b00758aae34",
        "Title": "اهواز"
    },
    {
        "ID": "9bd68f52-4597-4567-8707-2c11e31cdebd",
        "Title": "زابل"
    },
    {
        "ID": "a30c7cd3-33b8-4383-9155-2cc79c1d45bc",
        "Title": "اشتهارد"
    },
    {
        "ID": "ce2e78c3-c27b-4ec5-9120-2d6171f4c965",
        "Title": "بافق"
    },
    {
        "ID": "fc70bec1-6c70-4f75-a8d3-2d88b0aca775",
        "Title": "بابل"
    },
    {
        "ID": "af7664dd-ddfd-4307-ab77-2e2006d52fe9",
        "Title": "کرمانشاه"
    },
    {
        "ID": "b8a13eaf-7e19-432e-8259-309c34f1ed5f",
        "Title": "کوار"
    },
    {
        "ID": "911555da-79d1-4c2c-b658-3237ddec639b",
        "Title": "لردگان"
    },
    {
        "ID": "467be025-f522-4e57-b599-32700c249696",
        "Title": "شهر بابک"
    },
    {
        "ID": "13f40d1b-2bc6-47fd-99a6-3290f1933517",
        "Title": "عجب شیر"
    },
    {"ID": "a92a1639-16e3-472b-b037-3333d5e67627",
    "Title": "بروجرد"
},
{
    "ID": "ba0a0203-6816-48ac-923a-3378c1d8c6be",
    "Title": "سلیمانیه"
},
{
    "ID": "f38ac080-9b84-46cb-88cc-33876fd67571",
    "Title": "میاندوآب"
},
{
    "ID": "2dc41d10-5392-49f3-8cb5-348bf084a6d1",
    "Title": "سراب"
},
{
    "ID": "76ad29ea-da8e-4f73-a6f9-35bd37cf27de",
    "Title": "هفت تپه"
},
{
    "ID": "f4c3211b-0f59-4408-bca1-385566175c07",
    "Title": "لاهیجان"
},
{
    "ID": "afa1f8c1-615b-435c-ba21-398c17d00736",
    "Title": "هشترود"
},
{
    "ID": "4b3a0741-1f1b-48b4-b4b8-3a738c93a86b",
    "Title": "میمه"
},
{
    "ID": "25f9e0f8-a15b-4506-97e5-3ba4300c593f",
    "Title": "شاهرود"
},
{
    "ID": "12770f3c-9fec-4259-82bd-3bbb2b93569b",
    "Title": "بیجار"
},
{
    "ID": "030d5817-bd72-44df-92da-3c2d9a55aa15",
    "Title": "دلیجان"
},
{
    "ID": "3e4fae6a-3102-428d-9bb2-3c8db983250d",
    "Title": "بوشهر"
},
{
    "ID": "e701b0ef-3331-49c7-bdf9-3ced91cf0334",
    "Title": "گرگان"
},
{
    "ID": "76d0ae38-19eb-4798-99e4-3e22bfb6372c",
    "Title": "سواد کوه"
},
{
    "ID": "6309bcfe-9d3f-490d-a33e-3ea23209a665",
    "Title": "سیرجان"
},
{
    "ID": "4272c592-da42-4312-a8ea-4116d124cad7",
    "Title": "یزد"
},
{
    "ID": "d28f8b8a-bcaa-464a-b35d-415b1802545b",
    "Title": "زنجان"
},
{
    "ID": "4d343df1-71b4-4c34-bb1f-41d2ba6bef67",
    "Title": "محلات"
},
{
    "ID": "8c833f0f-e272-436a-a04c-4242c37479da",
    "Title": "اردكان"
},
{
    "ID": "1b264725-b703-4028-9a8b-43546116b406",
    "Title": "رباط كریم"
},
{
    "ID": "9c97df87-9e22-4281-a18f-442af88a3f4e",
    "Title": "اقلید"
},
{
    "ID": "428ac1a5-8c39-4efd-84c1-4483886dff13",
    "Title": "اربیل"
},
{
    "ID": "f59fe647-296f-4c6e-abc4-457b7c5d5548",
    "Title": "جاسک"
},
{
    "ID": "d16e1c48-211d-492b-8e8a-483ff2464b3d",
    "Title": "کیش"
},
{
    "ID": "ed39b43a-f2dc-4f91-be02-4e20060dfeea",
    "Title": "كرج"
},
{
    "ID": "852fc5d9-cbde-4033-bfba-4e460800bf6b",
    "Title": "جهرم"
},
{
    "ID": "80828371-a0a0-4ddd-9784-50fb9a005755",
    "Title": "نقده"
},
{
    "ID": "53fad889-6294-4351-8dde-5352be37789e",
    "Title": "دماوند"
},
{
    "ID": "d6bb9a20-5479-4eb1-8418-54b0d56719d8",
    "Title": "فسا"
},
{
    "ID": "f4d32644-c653-4ea7-8b07-56ea9068d73d",
    "Title": "اشنویه"
},
{
    "ID": "e11cda45-2f04-49e0-afd6-59bc30548a0f",
    "Title": "شیراز"
},
{
    "ID": "bec4477c-d0e2-4f68-a6b5-5b41b17ec826",
    "Title": "زرین شهر"
},
{
    "ID": "aac6d301-27b4-4c6f-9605-5cb778858f11",
    "Title": "رفسنجان"
},
{
    "ID": "f50f7928-b3f5-44e8-bf1f-5f89b6a1386a",
    "Title": "ارومیه"
},
{
    "ID": "7921b974-5053-4dc9-9b8b-5faba0db719c",
    "Title": "خوراسگان"
},
{
    "ID": "58151929-952f-412c-967f-60d3d913fb29",
    "Title": "برازجان"
},
{
    "ID": "a1d8ce7d-5808-4904-88d3-61620f495bd7",
    "Title": "بادرود"
},
{
    "ID": "0f7cd786-2de1-4a40-903c-629b0cb43d7d",
    "Title": "سمنان"
},
{
    "ID": "613c3e23-aea3-4b6e-a62a-63107e58c95f",
    "Title": "بروجن"
},
{
    "ID": "7323213f-3ae5-49f1-875c-64e20c681be8",
    "Title": "اردبیل"
},
{
    "ID": "d29dc7b4-dc3b-4782-a896-65d4e156653e",
    "Title": "کرمان"
},
{
    "ID": "ad06ab03-bb5b-4271-924f-666b10343f05",
    "Title": "ساوه"
},
{
    "ID": "bf9669b5-e9f7-434b-a32b-66b0feffde5d",
    "Title": "خنج"
},
{
    "ID": "b2e898e3-62e5-49b4-b288-670607f6fbd8",
    "Title": "دلیجان"
},
{"ID": "00499e3f-3220-41c7-a9f5-67c744d40d20",
"Title": "كرمانشاه"
},
{
"ID": "08fc7b72-9548-4dcf-9fbb-6810d78df9c7",
"Title": "خوانسار"
},
{
"ID": "ce0bac0d-8053-4141-a2d7-69e6115b160a",
"Title": "تالش"
},
{
"ID": "6842b5c5-1db8-4232-a84b-6a191d88cfad",
"Title": "نهاوند"
},
{
"ID": "6435355b-bdf9-45f0-b70d-6a3242000fa4",
"Title": "همدان"
},
{
"ID": "865f1eec-614d-4bfd-a7a7-6bd5d3bf09bf",
"Title": "قشلاق  شرقی"
},
{
"ID": "8cbac486-2efe-438c-a000-6de65acd90bf",
"Title": "شیروان"
},
{
"ID": "aba64c25-85e2-494b-826a-6fd414278ba8",
"Title": "بجنورد"
},
{
"ID": "2d6abbac-50c5-4d16-acac-73ab6d958b96",
"Title": "طالقان"
},
{
"ID": "acae02c8-9138-41bc-b94f-74e3ae3661b8",
"Title": "تنکابن"
},
{
"ID": "3a82cf73-1259-4d3a-b6b1-752e89dacdf5",
"Title": "لواسان"
},
{
"ID": "5f0764a2-1e47-47f7-9176-7554eb4fb15e",
"Title": "اسفراین"
},
{
"ID": "8a3e8c39-e630-453f-96e3-75f0fc92c98d",
"Title": "خمینی شهر"
},
{
"ID": "369b36c2-d5ab-49f7-9efa-76f9ac2b0cb3",
"Title": "اراك"
},
{
"ID": "394e512d-867f-4e3e-8f5c-77663fe4b009",
"Title": "الیگودرز"
},
{
"ID": "1c3a65eb-7292-4c44-be7c-78af8b2819d8",
"Title": "سقز"
},
{
"ID": "b1629f63-b2b6-44d3-9834-7bb46920f687",
"Title": "سراوان"
},
{
"ID": "081ab070-4235-4fb7-8163-7c426dacad23",
"Title": "فردوس"
},
{
"ID": "0437f6f2-064c-4822-ad91-7e2f3122fadd",
"Title": "بروجن"
},
{
"ID": "b0f5c54b-b78a-477f-999e-7fcd5cb2e424",
"Title": "رودسر"
},
{
"ID": "f7a9951e-4c51-45b9-9877-81c8c66c56cb",
"Title": "رامهرمز"
},
{
"ID": "a0ebf1ba-a6ff-4327-883a-82226715d6b8",
"Title": "اردستان"
},
{
"ID": "72c18890-5f70-4679-80dd-8294ef700979",
"Title": "الشتر"
},
{
"ID": "53450430-7ba3-48ec-b280-82a5fc0c4952",
"Title": "خرم آباد"
},
{
"ID": "4b39f780-d557-4e85-b592-893ca7d63a1f",
"Title": "بندر انزلی"
},
{
"ID": "8f1f4a6a-fd5e-48eb-90cc-8993641ff52a",
"Title": "بندر دیلم"
},
{
"ID": "c9ae79d9-0625-4606-a63d-8c4396c1fc48",
"Title": "مبارکه"
},
{
"ID": "24e1f805-d18d-4828-9f33-8e1356bb41f3",
"Title": "خوی"
},
{
"ID": "93ff901f-f737-4984-8a0c-8ed4496a2d66",
"Title": "سنندج"
},
{
"ID": "3b3da120-1f9f-4602-82f8-8f469f0e2b70",
"Title": "مهریز"
},
{
"ID": "beaf0c63-97e7-4a27-8a31-8fa602fbba6e",
"Title": "سلفچگان"
}
];

    const { state, dispatch } = useContext(stateContext);
    useEffect(() => {
        document.title = props.title;
      });

      const { match, location, history } = props;
      /*const [Name, setName] = useState({ value: state[0].Name, error: null });
      const [Family, setFamily] = useState({ value: state[0].Family, error: null });
      const [Email, setEmail] = useState({ value: state[0].Email, error: null });
      const [Password, setPassword] = useState({ value: state[0].Password, error: null });
      
      const [Mobile, setMobile] = useState({ value: state.Mobile, error: null });*/

      const [Name, setName] = useState({ value: state[0].Name, error: null });
      const [Family, setFamily] = useState({ value: state[1].Family, error: null });
      const [Email, setEmail] = useState({ value: state[3].Email, error: null });
      const [Mobile, setMobile] = useState({ value: state[2].Mobile, error: null });
      const [Address, setAddress] = useState({value: "", error: null});
      const [CityID, setCityID] = useState({value: "", error: null});
      const [ProvinceID, setProvinceID] = useState({value: "", error: null});
      const mobileRegex = new RegExp("^[0][9][0-9]{9,9}");
      const emailRegex = new RegExp("^.+[@].+");
      let provinces = [];

      useEffect(()=>{
        Axios.get(url + "/ProvinceGetAll")
          .then(res => {
            if(res.status === 200) {
              provinces = res.data;
              console.log(res);
              console.log(provinces);
            }
          })
          .catch(err => {
            console.log(err);
          })
      }, []);

    const classes = useStyles();
    return (
      <div className={classes.container}>
         <Grid
           container
           className={classes.grid}
           justify="center"
           alignItems="center"
         >
           <Grid item xs={12} sm={6}>
             <Paper className={classes.paper}>
               <Typography variant="h5" component="h3" className={classes.title}>
                 پروفایل
               </Typography>
               <Grid container spacing={1}>
                 <Grid item xs={12} sm={6}>
                   <TextField
                     label={"نام"}
                     variant={"filled"}
                     value={Name.value}
                     required
                     error={Name.error !== null}
                     onChange={e => {
                       const { value } = e.target;
                       setName(prevName => ({
                         value: value,
                         error: null
                       }));
                     }}
                     helperText={Name.error}
                     fullWidth
                     disabled
                   />
                 </Grid>
                 <Grid item xs={12} sm={6}>
                   <TextField
                     label={"نام خانوادگی"}
                     variant={"filled"}
                     value={Family.value}
                     required
                     error={Family.error !== null}
                     onChange={e => {
                       const { value } = e.target;
                       setFamily(prevFamily => ({
                         value: value,
                         error: null
                       }));
                     }}
                     helperText={Family.error}
                     fullWidth
                     disabled
                   />
                 </Grid>
                 <Grid item xs={12} sm={12}>
                   <TextField
                     label={"موبایل"}
                     type={"mobile"}
                     variant={"filled"}
                     value={Mobile.value}
                     required
                     error={Mobile.error !== null}
                     onChange={e => {
                       const { value } = e.target;
                       setMobile(prevMobile => ({
                         value: value,
                         error: null
                       }));
                     }}
                     helperText={Mobile.error}
                     fullWidth
                     disabled
                   />
                 </Grid>
                 <Grid item xs={12} sm={12}>
                   <TextField
                     label={"ایمیل"}
                     type={"email"}
                     variant={"filled"}
                     value={Email.value}
                     required
                     error={Email.error !== null}
                     onChange={e => {
                       const { value } = e.target;
                       setEmail(prevEmail => ({
                         value: value,
                         error: null
                       }));
                     }}
                     helperText={Email.error}
                     fullWidth
                   />
                 </Grid>
                 <Grid item xs={12} sm={6}>
                  <FormControl className={classes.formControl}>
                    <InputLabel >استان</InputLabel>
                      <NativeSelect
                        value={ProvinceID}
                        onChange={event => setProvinceID(event.target.value)}
                        /*inputProps={{
                          name: 'age',
                          id: 'age-native-simple',
                        }}*/
                      >
                        {DEFAULT_PROVINCES.map((item, index) => (
                          <option value={item.ID}>{`${item.Title}`}</option>
                        ))}
                      </NativeSelect>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <FormControl className={classes.formControl}>
                    <InputLabel >شهر</InputLabel>
                      <NativeSelect
                        value={CityID}
                        onChange={event => setCityID(event.target.value)}
                        variant="filled"
                        /*inputProps={{
                          name: 'age',
                          id: 'age-native-simple',
                        }}*/
                      >
                        {DEFAULT_CITIES.map((item, index) => (
                          <option value={item.ID}>{`${item.Title}`}</option>
                        ))}
                      </NativeSelect>
                    </FormControl>
                  </Grid>
                 <Grid item xs={12} sm={12}>
                   <TextField
                     label={"آدرس"}
                     variant={"filled"}
                     value={Address.value}
                     required
                     error={Address.error !== null}
                     onChange={e => {
                       const { value } = e.target;
                       setAddress(prevAddress => ({
                         value: value,
                         error: null
                       }));
                     }}
                     helperText={Address.error}
                     fullWidth
                     multiline
                     rowsMax="3"
                   />
                 </Grid>
               </Grid>
               <Button
                variant={"contained"}
                color={"primary"}
                //onClick={onSubmit}
                className={classes.button}
                >
                ثبت اطلاعات
                </Button>
               {/*<Button
                 variant={"contained"}
                 color={"primary"}
                 onClick={onSubmit}
                 className={classes.button}
               >
                 {Loading ? (
                   <CircularProgress className={classes.progress} size={24} />
                 ) : (
                   <Typography>دریافت کد تایید</Typography>
                 )}
                 </Button>*/}
             </Paper>
           </Grid>
         </Grid>
       </div>
     );
    };

  export default withRouter(ProfileScreen);