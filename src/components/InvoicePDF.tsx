import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
  }
});


const InvoicePDF = ({ invoice }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Invoice {invoice.id}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>Date of issue: {invoice.dateOfIssue}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>Accounting month: {invoice.accountingMonth}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>Price: {invoice.price}</Text>
      </View>
    </Page>
  </Document>
);

export default InvoicePDF;
