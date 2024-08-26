import { View, Text, Image, ScrollView, Pressable, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Col, Row } from "../../../../components/Grid";
import Ionicons from '@expo/vector-icons/Ionicons';


const formatCurrency =
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  })

export default function details() {
  const { id } = useLocalSearchParams();

  const [cars, setCars] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController(); // UseEffect cleanup untuk menghindari memory Leak
    const signal = controller.signal;  // UseEffect cleanup

    setLoading(true); //loading state
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api-car-rental.binaracademy.org/customer/car/" + id,
          { signal: signal }  // UseEffect cleanup
        );
        const body = await response.json();
        console.log('data detail =>', body)
        setCars(body);
      } catch (e) { // Error Handling
        if (err.name === 'AbortError') {
          console.log('successfully aborted');
        } else {
          console.log(err)
        }
      }
    };
    getData();
    return () => {
      // cancel request sebelum component di close
      controller.abort();
    };
  }, [id]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContent}>
          <Text style={styles.generalText}>{cars.name}</Text>
          <Row gap={4}>
            <Col style={styles.textIcon}>
              <Ionicons size={14} name={'people-outline'} color={'#8A8A8A'} />
              <Text style={styles.capacityText}>4</Text>
            </Col>
            <Col style={styles.textIcon}>
              <Ionicons size={14} name={'bag-outline'} color={'#8A8A8A'} />
              <Text style={styles.capacityText}>2</Text>
            </Col>
          </Row>

          <Image source={{ uri: cars.image }} height={190} width={190} />
        </View>

        <View style={styles.detailContent}>
          <Text style={styles.titleText}>Tentang Paket</Text>
          <Text style={styles.titleText}>Include</Text>
          <Text style={styles.generalText}>
            • Apa saja yang termasuk dalam paket misal durasi max 12 jam {'\n'}
            • Sudah termasuk bensin selama 12 jam {'\n'}
            • Sudah termasuk Tiket Wisata {'\n'}
            • Sudah termasuk pajak {'\n'}
          </Text>
          <Text style={styles.titleText}>Include</Text>
          <Text style={styles.generalText}>
            • Tidak termasuk biaya makan sopir Rp 75.000/hari {'\n'}
            • Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam {'\n'}
            • Tidak termasuk akomodasi penginapan {'\n'}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text> {cars.price}</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Lanjutkan Pembayaran</Text>
        </Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  headerContent: {
    alignItems: 'center',
    padding: 24,
  },
  titleText: {
    fontFamily: 'PoppinsBold',
    fontSize: 14
  },
  detailContent: {
    borderRadius: 8,
    shadowColor: 'rgba(0,0,0,1)',
    // shadowOffset: {
    //     width: 0,
    //     height: 3, 
    // },
    // shadowOpacity: 1,
    // shadowRadius: 1.5,
    elevation: 2,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 0.5,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff'

  },
  generalText: {
    fontFamily: 'Poppins',
    fontSize: 14,

  },
  footer: {
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#3D7B3F',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 2,

  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'PoppinsBold',
    textAlign: 'center',
  },
  capacityText: {
    color: "#8A8A8A"
  },
  price: {
    color: "#5CB85F"
  },
  textIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2
  }

})