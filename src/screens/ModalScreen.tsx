import * as React from 'react';
import {Text, View, StyleSheet, Modal, Button, Alert} from 'react-native';
import {useTranslation} from 'react-i18next';

function ModalScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const {t} = useTranslation();

  return (
    <View style={styles.workSpace}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalParent}>
          <View style={styles.modalStyle}>
            <Text style={styles.textStyle}>{t('common:question')}</Text>
            <View style={styles.button}>
              <Button
                title={t('common:yes')}
                onPress={() => {
                  Alert.alert(t('common:congratulations')),
                    setModalVisible(!modalVisible);
                }}
              />

              <Button
                title={t('common:no')}
                onPress={() => {
                  Alert.alert(t('common:regret')),
                    setModalVisible(!modalVisible);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Button title={t('common:click')} onPress={() => setModalVisible(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  workSpace: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalParent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalStyle: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
  },
});

export default ModalScreen;
