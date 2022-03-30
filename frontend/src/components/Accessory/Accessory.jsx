import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAccessory } from '../../redux/callAPI';
import number from '../../utils/number';
import Button from '../Button/Button';

const Accessory = (props) => {
    const dispatch = useDispatch()
  return (
    <div className="accessory-card">
      <Link to={props.slug}>
        <div className="accessory-card__image">
          <img src={props.img01} alt="" />
          <img src={props.img02} alt="" />
        </div>
      </Link>
      <h3 className="accessory-card__name">{props.name}</h3>
      <div className="accessory-card__price">{number(props.price)}</div>
      <div className="accessory-card__btn">
        {!props.admin ? (
          <Link to={`/accessory/${props.id}`}>
            <Button size="sm" icon="bx bx-cart" animate={true}>
              Mua
            </Button>
          </Link>
        ) : (
          <Link to={`/editproduct/${props.id}`}>
            <Button size="sm">
              <div className="d-flex align-items-center">
                <EditOutlined className="mr-2" />
                Sửa
              </div>
            </Button>
          </Link>
        )}
        <span> </span>
        <Popconfirm
          title="Are you want to delete this accessory?"
          onConfirm={() => {
            dispatch(deleteAccessory({ accessoryid: props.id }));
          }}
          okText="Yes"
          cancelText="No"
        >
          {props.admin ? (
            <Button size="sm" backgroundColor="red">
              <div className="d-flex align-items-center">
                <DeleteOutlined className="mr-2" />
                Xóa
              </div>
            </Button>
          ) : (
            ""
          )}
        </Popconfirm>
      </div>
    </div>
  )
}

export default Accessory