import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navi from './Navi'
import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        {/* grid setir ve sutunlardan istifade ederek columnlari yan yana getirmek uchun istifade edilir sematic ui de 16 beraber hisseye bolerek ishleri gorur */}
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <ProductList />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      
    </div>
  )
}
