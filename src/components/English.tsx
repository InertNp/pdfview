import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

export function MyDocumentEnglish() {
  return (
    <Document>
      <Page
        size="A4"
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 12,
        }}
      >
        <View
          style={{
            fontSize: 12,
            marginTop: 100,
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          <Text>Annex 2</Text>
        </View>
        <View
          style={{
            fontSize: 12,
            marginTop: 10,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          <Text
            style={{
              textDecoration: "underline",
            }}
          >
            Disability Identity Card Format
          </Text>
        </View>
        <View
          style={{
            fontSize: 12,
            marginTop: 20,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          <Text>The Goverment of Nepal</Text>
        </View>
        <View
          style={{
            fontSize: 12,
            marginTop: 10,
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          <Text>
            ..........................................................
          </Text>
        </View>
        <View
          style={{
            fontSize: 12,
            marginTop: 50,
            marginBottom: 10,
            paddingLeft: 50,
            paddingRight: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              fontSize: 11,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Text>ID Card Number:</Text>
            <Text>ID Card Type:</Text>
          </View>
          <View>
            <Image
              src={"https://source.unsplash.com/1600x600/?construction"}
              style={{
                width: 100,
                height: 100,
              }}
            />
          </View>
        </View>
        <View
          style={{
            fontSize: 12,
            marginTop: 20,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          <Text
            style={{
              textDecoration: "underline",
            }}
          >
            Disability Identity Card
          </Text>
        </View>
        <View
          style={{
            fontSize: 12,
            marginTop: 20,
            marginBottom: 20,
            paddingLeft: 50,
            textAlign: "left",
            gap: 10,
          }}
        >
          <Text>{`1) Full Name of Person:${""}`}</Text>
          <Text>{`2) Address:Province${"................"}District:${"................."} Local Level:${"................"} `}</Text>
          <Text>{`3) Date Of Birth:${" "} 4)Citizenship Number:${"................"}`}</Text>
          <Text>{`5)Sex:${".............."} 6)Blood Group:${".................."}`}</Text>
          <Text>{`7)Types of Disability:On the basis of nature${".........."} On the basis of Severity:${"..........."}`}</Text>
          <Text>{`8)Father Name/Mother Name or Guardain:${"............."}`}</Text>
          <Text>{`9)Signature of ID card Holders:${".............."}`}</Text>
          <Text>{`10)Approved By:${"...................."}`}</Text>
        </View>
        <View
          style={{
            fontSize: 12,
            marginTop: 30,
            marginBottom: 20,
            display: "flex",
            paddingRight: 20,
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <span
            style={{
              width: 200,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Text>{`Name:................`}</Text>
            <Text>{`Signature.................`}</Text>
            <Text>{`Designation`}</Text>
            <Text>{`Date`}</Text>
          </span>
        </View>
        <View
          style={{
            position: "absolute",
            paddingBottom: 10,
            paddingLeft: 100,
            paddingRight: 100,
            bottom: 0,
          }}
        >
          <Text
            style={{
              fontWeight: "thin",
              fontSize: 11,
              fontStyle: "italic",
              color: "gray",
            }}
          >
            {`"If somebody finds this ID card, please deposit this in the nearby police station or municipality office"`}{" "}
          </Text>
        </View>
      </Page>
    </Document>
  );
}
