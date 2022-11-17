import {
  cilBackspace,
  cilListFilter,
  cilSend,
  cilArrowRight,
  cilBookmark,
  cilOptions,
  cilAlignLeft,
  cilQrCode,
  cilSettings,
  cilBusAlt,
  cilPencil,
  cilAccountLogout,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CCardHeader,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderText,
  CHeaderToggler,
  CPopover,
} from "@coreui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profile } from "../state-management/action/profileAction";
import { profileMode } from "../state-management/action/profileModeAction";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <CHeader
      className={"bg-transparent text-white d-flex p-2 w-100 position-absolute"}
      style={{
        justifyContent: "space-between",
        zIndex: 10,
        borderBottomColor: "transparent",
      }}
      // position={pos.pos}
    >
      <CDropdown>
        <CDropdownToggle
          placement="bottom-end"
          className="py-0 bg-transparent border-0"
          caret={false}
        >
          <CIcon size="xl" icon={cilAlignLeft} />
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem>
            <CIcon className='me-1' icon={cilPencil} />
            ویرایش پروفایل
          </CDropdownItem>
          <CDropdownItem href="/#/SavedsPage">
            <CIcon className='me-1' icon={cilBookmark} />
            تورهای ذخیره شده
          </CDropdownItem>
          <CDropdownItem>
            <CIcon className='me-1' icon={cilBusAlt} />
            تورهای من
          </CDropdownItem>

          <CDropdownItem className='me-1' href="/#/Setting">
            <CIcon className='me-1' icon={cilSettings} />
            تنظیمات
          </CDropdownItem>
          <CDropdownItem
            onClick={() => {
              localStorage.removeItem("token");
              dispatch(profileMode(false));
              dispatch(profile({}));
            }}
          >
            <CIcon icon={cilAccountLogout} className='me-1' />
            خروج
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>

      <CIcon size="xl" icon={cilQrCode} />
    </CHeader>
  );
};
export default ProfileHeader;
