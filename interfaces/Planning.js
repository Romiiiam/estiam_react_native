import React from 'react'
import { Text } from 'react-native';
import { Container } from 'native-base';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.']
};

LocaleConfig.defaultLocale = 'fr';

class Planning extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Calendar
  // Collection of dates that have to be marked. Default = {}
  markedDates={{
    '2019-03-05': {selected: true, marked: true, selectedColor: 'blue'},
    '2019-03-08': {marked: true},
    '2019-03-09': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2019-03-12': {disabled: true, disableTouchEvent: true}
  }}
/>
      </Container>
    );
  }
}

export default Planning;    