#!/usr/bin/env python3
""" Sum mixed list """
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Return the sum of a list of integers and floats.

    Args: mxd_lst (List[Union[int, float]])

    Returns: float
    """
    return sum(mxd_lst)
