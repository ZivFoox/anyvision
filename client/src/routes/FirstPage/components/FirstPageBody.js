import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { formatDate } from '../../../utils/DateUtil'
import { browserHistory } from 'react-router'
import '../styles/FirstPageBody.scss'

class FirstPageBody extends Component {
  render () {
    const columns = [
      {
        Header: 'Track Name',
        accessor: 'trackName',
      },
      {
        Header: 'Collection Name',
        accessor: 'collectionName',
      },
      {
        Header: 'Release Date',
        accessor: 'releaseDate',
        Cell: props => <span>{formatDate(new Date(props.value))}</span>
      },
      {
        Header: 'Price',
        accessor: 'trackPrice',
      }
    ]

    return (
      <div className='FirstPageBody-FirstPageBodyContainer'>
        <ReactTable
          className='FirstPageBody-searchTable -highlight'
          data={this.props.results}
          columns={columns}
          getTrProps={(state, rowInfo) => {
            return {
              onClick: (e) => {
                console.log('onClick ', rowInfo.original)
                let selectedTrack = {
                  trackName: rowInfo.original.trackName,
                  collectionName: rowInfo.original.collectionName,
                  previewUrl: rowInfo.original.previewUrl,
                  releaseDate:rowInfo.original.releaseDate,
                  trackPrice:rowInfo.original.trackPrice,
                }
                this.props.setSelectedTrack(selectedTrack)
                browserHistory.push('/videoPage')
              }
            }
          }
              }
       />
      </div>
    )
  }
}

FirstPageBody.propTypes = {
  results: PropTypes.array.isRequired,
  setSelectedTrack: PropTypes.func.isRequired,
}

export default FirstPageBody
