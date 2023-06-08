import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const EventScreen = () => {
  const tableHead = ['Time', 'Event', 'Distance', 'Equipment']; // Updated table header
  const tableData = [
    ['10:00 AM', 'Person', '2 m', 'cai001258'],
    ['2:30 PM', 'Person', '1.5 m', 'cai001507'],
    ['4:00 PM', 'Person', '3 m', 'cai001493'],
  ]; // Example rows of data

  return (
    <View style={styles.container}>
      <Table borderStyle={styles.borderStyle}>
        <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
        <Rows data={tableData} style={styles.row} textStyle={styles.rowText} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  borderStyle: { borderWidth: 1, borderColor: '#000' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  headText: { textAlign: 'center', fontWeight: 'bold' },
  row: { height: 30 },
  rowText: { textAlign: 'center' },
});

export default EventScreen;